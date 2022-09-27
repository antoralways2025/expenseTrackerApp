import { createSlice } from "@reduxjs/toolkit";


const initialState={
        isOn:false,
        modalData:{},
        type:''
   }





   const modalSlice=createSlice({
    name:"modal",
    initialState,
    reducers:{

         somthingWithModal:(state,action)=>{  

               const {modalData,type}=action.payload

               state.isOn = true ;
               state.modalData=modalData ;
               state.type=type ;

         },
         closeModal:(state,action)=>{
            
            state.isOn = false ;
            state.modalData={}
            state.type="";
         }

    }
   })



   export const {somthingWithModal ,closeModal}=modalSlice.actions

   export default modalSlice.reducer