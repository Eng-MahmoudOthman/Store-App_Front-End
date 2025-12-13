import React, { useEffect, useState } from 'react'

export default function useNetwork() {

   const [network , setNetwork] = useState(false) ;





   const detectOnline = ()=>{
      window.addEventListener("online" , function (){
         setNetwork(true)
      })
      window.addEventListener("offline" , function (){
         setNetwork(false)
      })
   }


   useEffect(() => {
      detectOnline()
   }, [])
   
   return (
      <>
         {network? "" : 
         <>
            <div className="network fixed-bottom">
               <h3 className='fw-bold mt-3'><i className="fa-solid fa-wifi p-1 d-inline-block me-2"></i>No Internet Connection</h3>
               <p className='fa-2xs'>Check your connection, then refresh the page.</p>
            </div>
         </>}
      </>
   )
}
