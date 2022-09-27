import { createSlice } from "@reduxjs/toolkit";



const initialState={

    search:"",
    filterType:null,
 
}



const filterSlice=createSlice({
    name:'filter',
    initialState,
    reducers:{

        filterByType:(state,action)=>{
            state.filterType=action.payload

        },
        filterBySearch:(state,action)=>{
            state.search=action.payload
        },
 

        resetFilter:(state)=>{
              state.filterType=""
             state.search=""  ;
        }

    }
})



export const {filterByType ,resetFilter ,filterBySearch}=filterSlice.actions

export default filterSlice.reducer