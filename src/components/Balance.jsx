import React from "react";
import { useSelector } from "react-redux";
import numberWithCommas from "../utils/thousandSeparator";

 

const calculateIncome=(transactions)=>{

  let income=0;
  transactions.forEach(transaction=>{

      const {type,amount}=transaction ;

       if(type === 'income'){

         income+=amount

       }else{
        income-=amount
       }


      
  })

      // thousand separatore retun value with comma
  return numberWithCommas(income)
}

function Balance() {
  const { transactions } = useSelector((state) => state.transactions);

  return (
    <>
      <div className="top_card">
        <p>Your Current Balance</p>
        <h3>
          <span>৳</span>
          {transactions?.length > 0 ?( 
             <span> {calculateIncome(transactions)}</span>
            
          ):(0)} 
        </h3>
      </div>
    </>
  );
}

export default Balance;
