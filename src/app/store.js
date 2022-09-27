import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../Features/filters/filterSlice";
import modalReducer from "../Features/modal/modalSlice";
import transactionReducer from "../Features/Transactions/transactionSlice";
export const store = configureStore({
    reducer: {
     
         transactions:transactionReducer,
         filter:filterReducer,
         modal:modalReducer
    },
});
