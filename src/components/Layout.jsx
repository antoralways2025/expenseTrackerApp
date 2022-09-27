import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';
const Layout = ({children}) => {
  return (
    <div className='App'>  
       
        {/* Header  */}

        <Navbar/>
         

         <div className='container'>
         {children}
         </div>


         {/* Footer */} 
         <Footer/>
    </div>
  )
}

export default Layout