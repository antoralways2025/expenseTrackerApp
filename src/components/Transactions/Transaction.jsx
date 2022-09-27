/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DeleteImg from '../../assets/images/delete.svg';
import EditImg from '../../assets/images/edit.svg';
import { somthingWithModal } from '../../Features/modal/modalSlice';
import { editActive } from '../../Features/Transactions/transactionSlice';
import numberWithCommas from '../../utils/thousandSeparator';

const Transaction = ({transaction ,whichPage}) => { 

  const {name,amount,type ,id}=transaction ||{} 


   const {editing}=useSelector(state=>state.transactions)

   
 



   const dispatch=useDispatch() ;

   const handleDelete=()=>{


             dispatch(
              somthingWithModal({isOn:true,modalData:transaction,type:"delete"})
             )

    //  dispatch(
    
    //   removeTransaction(id)
    //  )
   }

  //  handleedit

  const handleEdit=()=>{
    dispatch(editActive(transaction))
  }

  return (
    < > 

<li className={`transaction ${type}`}>
                <p>{name}</p>
                <div className="right">
                  <p>৳ {numberWithCommas( amount)}</p>
                  <button onClick={handleEdit} className="link">
                    <img className="icon" src={EditImg} alt="edit img"/>
                  </button>
                  { !editing.id&&
                    <button onClick={handleDelete} className="link">
                    <img className="icon" src={DeleteImg} alt='delete logo' />
                  </button>
                  }
                </div>
  </li>

    </>
  )
}

export default Transaction