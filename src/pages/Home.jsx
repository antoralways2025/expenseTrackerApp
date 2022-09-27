import React from 'react';
import Balance from '../components/Balance';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Modal from '../components/modals/Modal';
import Transactions from '../components/Transactions/Transactions';

const Home = () => {
  return (
    <> 
            <Layout> 

            <Modal/>
            
            <Balance/>
            <Form/>
            <Transactions/>

          </Layout>
    </>
  )
}

export default Home