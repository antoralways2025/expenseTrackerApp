

 const myNextID=(array=[])=>{

   const id=   array.reduce((prev,cur)=>{ 

           return  Math.max(prev,cur.id)


     },-1)



     return id+1
     
 }


 export default myNextID