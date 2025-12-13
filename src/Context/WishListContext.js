import axios from "axios";
import { createContext , useEffect, useState } from "react";
import { toast } from "react-toastify";




export const WishListContext = createContext();

export default function WishListContextProvider(props){
   const[displayWishList , setDisplayWishList] = useState(true) ;
   const[loading , setLoading] = useState(false) ;

   const[wishList , setWishList] = useState({}) ;
   const header = {
      token:`${process.env.REACT_APP_SECRET_TOKEN} eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E3MWQ0MTEyYWE2NTNkYmQzMDI1NTAiLCJuYW1lIjoibWFobW91ZCBvc21hbiBtYWhtb3VkIiwicGhvbmUiOiIwMTEyMjIyMjM4OCIsImVtYWlsIjoibWFobW91ZEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTczOTAwNTI4OH0.SfLBJ_ld5bTcUzcT6RRa4CajI_xW5UuCJaZFaFOQOoE`
   }




   // Token Online :
   // const header = {
   //    token:`${process.env.REACT_APP_SECRET_TOKEN} eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxNmZiN2NkYmRlM2FiNmFhMTRmYWEiLCJuYW1lIjoibWFobW91ZCBvc21hbiBtYWhtb3VkIiwicGhvbmUiOiIwMTEyMjIyMjM4OCIsImVtYWlsIjoibWFobW91ZF9Vc2VyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0NDM4ODUwfQ.PlEgF38CMvuH-WDHlvbq9eMawNUoin5mEynK3yDH094`
   // }


   // let header = {
   //    token:localStorage.getItem("token")  ,
   // };


   async function updateWishList(id){
      setLoading(true)
      let response =  await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/wishlist` , {product:id} , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         toast.error(error.response?.data.message , {
            position: "top-right"
         });
         // setDisplayWishList(!displayWishList)
         return ;
      })

      setLoading(false)
      toast.success(response?.data.message , {
         position: "top-right"
      });
      getLoggedWishList()
      setDisplayWishList(!displayWishList)
   }



   
   async function getLoggedWishList(){
      let response =  await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/wishlist` ,  {headers:header} )
      .catch((error)=>{
         toast.error(error.response?.data.message , {
            position: "top-left"
         });
      })

      if(response?.data.message === "success"){
         setWishList(response.data.WishList)
         // console.log(response.data.WishList);
      }
   }



   // useEffect(() => {
   //    getLoggedWishList()
   // })

   useEffect(() => {
      getLoggedWishList()
   },[])
   

   return (
      <>
         <WishListContext.Provider 
            value={{
               getLoggedWishList ,
               displayWishList , 
               setDisplayWishList ,
               updateWishList ,
               wishList , 
               setWishList ,
               loading ,
            }}>
            {props.children}
         </WishListContext.Provider>
      </>
   )
}

