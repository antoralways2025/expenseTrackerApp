/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Footer = () => {
  return (
     <div className=" bg-pink-700 text-white p-4 flex justify-evenly md:gap-4">


          <div>
               <span> &copy;2022 Sheikh Antor </span>
          </div>
      
       <ul className='flex gap-2'> 
          <li>Usefull Links</li>
         <a className='hover:underline' target="_blank"  href="https://web.facebook.com/antoralways2025" rel="noreferrer"><li>Facebook</li> </a>
         <a   className='hover:underline' target="_blank"  href="https://github.com/antoralways2025"><li>GitHub</li> </a>
         <a  className='hover:underline' href="https://portfolio-eight-iota-86.vercel.app/"> <li>My Website</li></a>
   
       

       </ul>
      
        
      </div> 
  )
}

export default Footer