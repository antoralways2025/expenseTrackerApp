

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import transactionAPI from './transactionAPI';


// asynch thunk 

// feath Transaction history 
  export  const feathTransactions=createAsyncThunk("transaction/feathTransaction",async(pageNumber)=>{
          const {allData,limitedData,pages}=   await transactionAPI.getTransactions(pageNumber)  ;
          return  {allData,limitedData,pages}
             
  })

//  create transactino 

 export const  createTransaction=createAsyncThunk("transaction/createTransaction",async(data)=>{

       const transaction= await transactionAPI.addTransaction(data) 
       return transaction
 })



//  update transaction

 export const changeTransaction=createAsyncThunk("transaction/changeTransaction",async({id,data})=>{

           const transaction= await transactionAPI.editTransaction(id,data) 
           return transaction


 })


//  remove transactinon

export const removeTransaction=createAsyncThunk("transaction/removeTransaction",async(id)=>{

         const transaction= await transactionAPI.deleteTransaction(id) 

        //  return  {transaction,type}

        return transaction
})



const initialState={

     loading:false,
     isError:false,
     error:'',
     transactions:[],
     allTransactions:[],
     editing:{},
     pages:1
}

const transactionSlice = createSlice({
    name:"transaction",
    initialState,
     reducers:{
        editActive:(state,action)=>{
          state.editing=action.payload
        },
        editInActive:(state)=>{
           state.editing={}
        }

     },
    extraReducers:(builder)=>{
        builder     

              //  for geting...........
      .addCase(feathTransactions.pending,(state)=>{

              state.loading= true ; 
               
              state.isError=false ; 
              
              
        })

        
      .addCase(feathTransactions.fulfilled,(state,action)=>{

        state.loading= false ;
        state.isError=false ;
      

            if(action.payload.limitedData?.length>0){ 
              state.transactions=action.payload.limitedData   
            }



            if(action.payload.allData?.length>0){
              state.transactions=action.payload.allData  

            }

        
        state.pages=action.payload.pages || 1 ;
        state.error=' ' ;
        
       })

       .addCase(feathTransactions.rejected,(state,action)=>{

            state.loading= false ;
            state.isError=true;
            state.transactions=[]
            state.error=action.error?.message
            
      })

                  // for creating..................

      .addCase(createTransaction.pending,(state,action)=>{

        
        state.loading= true ; 
               
        state.isError=false ; 
        
        
       })

       .addCase(createTransaction.fulfilled,(state,action)=>{

        state.loading= false ;
        state.isError=false ;
        state.transactions.unshift(action.payload)
        state.error=' '
        
       })

       .addCase(createTransaction.rejected,(state,action)=>{

        state.loading= false ;
        state.isError=true;
        state.error=action.error?.message
        
        })

  

               // for changing..................

               .addCase(changeTransaction.pending,(state,action)=>{

        
                state.loading= true ; 
                       
                state.isError=false ; 
                
                
               })
        
               .addCase(changeTransaction.fulfilled,(state,action)=>{
        
                state.loading= false ;
                state.isError=false ;
                
                    const indexToUpdate = state.transactions.findIndex(t=> t.id === action.payload.id) ;

                     state.transactions[indexToUpdate]=action.payload

                state.error=' '
                
               })
        
               .addCase(changeTransaction.rejected,(state,action)=>{
        
                state.loading= false ;
                state.isError=true;
                state.error=action.error?.message
                
                })


          
               // for deleteing..................

               .addCase(removeTransaction.pending,(state,action)=>{

        
                state.loading= true ; 
                       
                state.isError=false ; 
                
                
               })
               
               .addCase(removeTransaction.fulfilled,(state,action)=>{
        
                state.loading= false ;
                state.isError=false ;

                 

                state.transactions=state.transactions.filter(t=>t.id !== action.meta.arg) 

                    //  if(action.payload.type === 'home'){ 

                    //      console.log("I am true Home page")
                     

                    //    }
                
                      // if(action.payload.type === 'transactionAll'){

                      //   console.log("I am true Transaction page")
                      //   state.transactions=state.allTransactions.filter(t=>t.id !== action.meta.arg)
                      // }
               

                state.error=''
                
               })
             
               .addCase(removeTransaction.rejected,(state,action)=>{
        
                state.loading= false ;
                state.isError=true;
                state.error=action.error?.message
                
              })
    }

    

}) ;


 export const  {editActive,editInActive} = transactionSlice.actions

  
export default transactionSlice.reducer