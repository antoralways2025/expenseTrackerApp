import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feathTransactions } from "../../Features/Transactions/transactionSlice";
import Filter from "../Filter";
import Form from "../Form";
import Transaction from "./Transaction";



const TransactionAll = () => {
  const dispatch = useDispatch();

  const { transactions, isLoading, isError, editing } = useSelector(
    (state) => state.transactions
  );
  const { filterType ,search } = useSelector((state) => state.filter);

 


  // reagex 



 

   let regex = new RegExp(`${search}`, "ig");
 

  useEffect(() => {
    dispatch(feathTransactions(1));
  }, [dispatch]);

  // what to do render

  let contant;

  if (isLoading) contant = <p>Loading..........</p>;

  if (!isLoading && !isError) {
    contant = transactions.filter(t=>search.trim().length? t.name.match(regex):true)
      .filter((t) => (filterType ? t.type === filterType : true))
      .map((transaction) => (
        <Transaction
          whichPage="transactionAll"
          transaction={transaction}
          key={transaction.id}
        />
      ));
  }

 
  return (
    <> 
    
     <Filter/>

      <div className="container ">
        

        <div className="   mx-auto    ">
          {editing.id && <Form />}
         
        </div>

      </div>

      <div className=" bg-gray-400  py-4 px-8 my-2 md:my-8 ">{contant}</div> 

    </>
  );
};

export default TransactionAll;
