/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { feathTransactions } from '../../Features/Transactions/transactionSlice';




 import Transaction from './Transaction';

const Transactions = () => {  

    


     const dispatch = useDispatch()

   const {transactions,isLoading,isError ,editing} =useSelector(state=> state.transactions)

    
//    decide what to render 

  let contant = null ;
   
   if(isLoading) contant= <p >Loading...........! </p> 

   if(!isLoading && isError ) contant= <p className='error'>There was an error occured !</p> 


   if(!isLoading && !isError && transactions.length > 0 ){ 

                    const sliceTransaction=transactions.slice(0,5)
          
          contant = sliceTransaction.map(transaction=> <Transaction whichPage="home" transaction={transaction} key={transaction.id}/>)
   }
    


   if(!isLoading && !isError && transactions.length === 0 ) {
    contant= <p className='error'>No Transaction found !</p>
   }

   
 useEffect(()=>{ 

    dispatch(

        feathTransactions()

    )
    
},[dispatch])


    return(
        <>
           <p  className="second_heading">Your Transactions :</p> 

            <div className="conatiner_of_list_of_transactions"> 
               
                <ul>
                     
                      {
                        contant
                      }

                      {
                        !editing.id && transactions.length > 5 &&
                     
                       <Link to="/transactionall"> 
                      <button className=' bg-pink-700 w-full p-4 text-white font-bold ' >View all</button> 
                      </Link>
                       }

                </ul>

            </div>

        </>
    )
}


export default Transactions