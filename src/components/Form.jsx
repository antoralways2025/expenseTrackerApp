import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 
 import { changeTransaction, createTransaction, editInActive } from '../Features/Transactions/transactionSlice';


const Form = () => { 


  const [name,setName]=useState('') ;
  const [type,setType]=useState('') ;
  const [amount,setAmount]=useState('');

  const [editMode,setEditMode]=useState(false)  

  const dispatch = useDispatch();
  const { isLoading, isError, editing } = useSelector((state) => state.transactions);
 


  


  // listen for edit modeactive 

  useEffect(()=>{

     const {id,name,amount,type}=editing ||{} ;
     if(id){ 

      setEditMode(true) 

      setName(name) ;
      setAmount(amount) 
      setType(type)

     }else{
      setEditMode(false) 
       resetForm();

     }

  },[editing])




  const resetForm=()=>{
      setName('') ;
      setAmount('') 
      setType('')
  }
   

  const handleCreate=(e)=>{
    e.preventDefault() 


      dispatch(
        createTransaction({
          name,type,amount:Number(amount)
        })
      )

      resetForm()
  }


  const handleUpdate=(e)=>{

     e.preventDefault() ;

     dispatch(
      changeTransaction({
        id:editing?.id,
        data:{
          name,
          amount,
          type
        }
      })
     )

   

     resetForm() 
     setEditMode(false) 

     dispatch(editInActive())
  }

  const cencelEditMode=()=>{

    resetForm()
     setEditMode(false)

     dispatch(editInActive())
  }

  
  return (
    <>
      <div className="form"  >
        <h3>Add new transaction</h3>


        <form  onSubmit={editMode ? handleUpdate : handleCreate}>

        <div className="form-group">
          <label htmlFor="transaction_name">Name</label>
          <input
            required
            type="text"
            value={name}
            name="name"
            onChange={e=>setName(e.target.value)}
            placeholder="My Salary"
          />
        </div>

        <div className="form-group radio"  >
          <label htmlFor="transaction_type">Type</label>
          <div className="radio_group">
            <input required     type="radio" value="income" name="type" checked={type === 'income'} 
             onChange={e=>setType('income')} />
            <label htmlFor="transaction_type"> Income </label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              checked={type === 'expense'} 
              onChange={e=>setType('expense')}
              placeholder="Expense"
            />

            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="transaction_amount">Amount</label>
          <input required
                name="amount"
                onChange={e=>setAmount(e.target.value)}
                value={amount}
            type="number"
            placeholder="Enter Amount"
     
          />
        </div>

        <button  disabled={isLoading} type="submit" className="btn">
         {editMode ? ' Update Transaction' :' Add Transaction'}
        </button>

      {
        !isLoading && isError &&   <p className="error"> There was an error occured  </p>
      }

{ editMode &&  <button onClick={cencelEditMode} className=" btn "> Cancel Edit </button>}

        </form>
      


      </div>
    </>
  );
};

export default Form;
