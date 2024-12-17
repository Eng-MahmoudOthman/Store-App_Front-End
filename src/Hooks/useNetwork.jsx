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
         {network? "" : <><div className="network fixed-bottom"><i className="fa-solid fa-wifi p-1 "></i> Network Offline</div></>}
      </>
   )
}
