import axiosInstance from "../../utils/Axios";

 const transactionAPI ={
   
      getTransactions:async(pageNumber)=>{  

               const limit=6; 
                const limitForAllPage=10 ;

                 
               if(pageNumber){ 

                const {data} =  await axiosInstance.get(`/transactions`)  

                 

                const response =  await axiosInstance.get(`/transactions?_page=${pageNumber >1 ?pageNumber :1}&_limit=${limitForAllPage}`) 

                return{
                  allData:response.data,
                  pages:Math.ceil(data?.length/limitForAllPage)
                }
                 
               }
                

             const res =  await axiosInstance.get(`/transactions?_sort=id&_order=desc&_limit=${limit}`) ; 
      

                return {
                    limitedData:res.data,
                }

      },

     addTransaction:async(data={})=>{
           const res= await axiosInstance.post("/transactions",data) 
             return res.data
     },
     editTransaction:async(id,data)=>{ 
      const res= await axiosInstance.put(`/transactions/${id}`,data)  ;

       return res.data 

     },

     deleteTransaction:async(id)=>{
       const res= await axiosInstance.delete(`/transactions/${id}`) ;

         return res.data

         
     }


 }


 export default transactionAPI