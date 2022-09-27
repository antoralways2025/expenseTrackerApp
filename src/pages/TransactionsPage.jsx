import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Modal from '../components/modals/Modal'
import Pagination from '../components/Pagination'
import TransactionAll from '../components/Transactions/TransactionAll'



function TransactionsPage() {

 
    
   const {pages}=useSelector(state=>state.transactions) 

   
  return (
    < > 


        <Modal/>
        <TransactionAll/> 


        {
          pages >1 && <Pagination/>
        }

        <Footer/>
        
    </>
  )
}

export default TransactionsPage