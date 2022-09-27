import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Features/modal/modalSlice";
import { removeTransaction } from "../../Features/Transactions/transactionSlice";
import inWords from "../../utils/numberToWords";

export default function Modal() {

  
 const dispatch=useDispatch()


  const {isOn,modalData,type}=useSelector(state=>state.modal) 

   

  const someActoinHandler=()=>{

     if(type==='delete'){
      dispatch(removeTransaction(modalData.id))
     }
     
    dispatch(closeModal())
  }


  

  const closeHandler=()=>{
    dispatch(closeModal())
  }

  return (
    <>
 
      
      {isOn ? (
        <>
          <div
            className="justify-center items-center mx-2 md:mx-6 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    ( {modalData.type}) Do you want to Delete ?
                  </h3> 
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeHandler}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      × 
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed font-bold list-none">
                   <li className=""> Name :  <span className="    text-sm  font-light underline text-green-500">{ modalData.name}</span> </li>
                   <li> Amount :  <span className="underline font-light text-sm  text-green-500">{ inWords(modalData.amount ).toUpperCase() } TK/=</span></li>
                   <li> Type :   <span className="underline   text-sm  font-light  text-green-500">{ modalData.type}</span></li>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={someActoinHandler}
                  >
                     {type}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}