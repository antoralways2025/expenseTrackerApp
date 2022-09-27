import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { filterByType, resetFilter } from "../../Features/filters/filterSlice";

import { filterBySearch, filterByType, resetFilter } from "../Features/filters/filterSlice";

const Filter = () => {


    const [inputValue,setInputValue]=useState('')
  const dispatch = useDispatch();

  const { editing } = useSelector((state) => state.transactions);
  const { search ,filterType} = useSelector((state) => state.filter);
  const [type, setType] = useState("");



  //  handlechange

  const changeHandlerForIncome = (e) => {
    setType("income");

    dispatch(filterByType("income"));
  };

  const changeHandlerForExpense = (e) => {
    setType("expense");
    dispatch(filterByType("expense"));
  };

  //  reset filter

  const resetAll = () => {
    setType("");
    setInputValue('')

    dispatch(resetFilter());
  };



//   inputChangeHandler

function debounce(func, timeout = 1500){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
 
 

  return (
    <div>
      <div className={`bg-[#4338ca] p-4`}>
        {editing.id && (
          <div className="text-5xl font-extrabold ...">
            <h1 className=" text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Filter disabled
            </h1>
          </div>
        )}

        <div
          className={`md:w-2/4 w-full mx-auto  ${
            editing.id && "hidden"
          }  mb-4 flex flex-col gap-4  py-4 md:px-12 text-white`}
        >
          <div className="flex justify-between items-center">
            <Link to='/'> <label className="bg-blue-500 cursor-pointer hover:bg-blue-600 rounded px-2 py-1" htmlFor="transaction_type"> Home  </label></Link>
            <div className="radio_group bg-blue-500 px-2 py-1 rounded hover:bg-blue-600">
              <input
                type="radio"
                value="income"
                name="type"
                checked={filterType === "income"}
                onChange={changeHandlerForIncome}
              />
              <label htmlFor="transaction_type"> Income </label>
            </div>
            <div className="radio_group bg-blue-500 px-2 py-1 rounded hover:bg-blue-600">
              <input
                type="radio"
                 className=""
                value="expense"
                name="type"
                checked={filterType === "expense"}
                onChange={changeHandlerForExpense}
                placeholder="Expense"
              />

              <label htmlFor="transaction_type">Expense</label>
            </div>
          </div>

          <div className="text-center w-full flex gap-4 justify-between">
            <input 
               value={inputValue}
               onChange={(e)=>setInputValue(e.target.value)}
              onKeyUp={debounce((e)=> dispatch(filterBySearch(inputValue)) )} 
              className="w-full text-gray-500 border-none outline-none rounded px-8 text-sm"
              type="search"
              placeholder="Searach..."
            />
            <button
              onClick={resetAll}
              className=" w-80 bg-blue-500 cursor-pointer rounded px-2 py-1 hover:bg-blue-600 "
            >
              Reset All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
