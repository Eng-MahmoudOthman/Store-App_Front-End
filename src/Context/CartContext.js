import axios from "axios";
import { createContext , useEffect, useState } from "react";
import { toast } from "react-toastify";




export const CartContext = createContext();

export default function CartContextProvider(props){
   const[display , setDisplay] = useState(true) ;
   const[loading , setLoading] = useState(false) ;

   const[cart , setCart] = useState({}) ;
   const header = {
      token:`${process.env.REACT_APP_SECRET_TOKEN} eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzAzYWI2NTg3YWQ4MmNmMjE5ZjY3YjYiLCJuYW1lIjoibWFobW91ZCBvc21hbiIsInBob25lIjoiMDExMjIyMjIzODgiLCJlbWFpbCI6Im1haG1vdWRfVXNlckBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTczNDA5Mzg5OX0.OHVCwM68QH36a9pGwQMoIi6qyf6xavNYK4swJgK_5Es`
   }
      // let header = {
   //    token:localStorage.getItem("token")  ,
   // };



   async function addToCart(id){
      setLoading(true)
      let response =  await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/carts/add` , {product:id} , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         toast.error(error.response?.data.message , {
            position: "top-right"
         });
         setDisplay(!display)
      })

      if(response?.data.message === "Added Successfully"){
         setLoading(false)
         toast.success(response?.data.message , {
            position: "top-right"
         });
         setCart(response.data.cart) ;
         setDisplay(!display)
      }
   }

   async function increaseItemCart(id){
      setLoading(true)
      let response =  await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/carts?quantity=increase` , {product:id} , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         toast.error(error.response?.data.message , {
            position: "top-left"
         });
      })
      if(response?.data.message === "success"){
         setLoading(false)
         setCart(response.data.cart)
      }
   }

   async function decreaseItemCart(id){
      setLoading(true)
      let response =  await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/carts?quantity=decrease` , {product:id} , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         toast.error(error.response?.data.message , {
            position: "top-left"
         });
      })
      if(response?.data.message === "success"){
         setLoading(false)
         setCart(response.data.cart)
      }
   }
   
   async function removeItemFromCart(id){
      setLoading(true)
      let response =  await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/carts/remove/${id}` , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         toast.error(error.response.data.message , {
            position: "top-left"
         });
      })
      if(response?.data.message === "Remove Successfully"){
         setLoading(false)
         toast.success(response?.data.message , {
            position: "top-right"
         });
         setCart(response.data.cart)
      }
   }
   
   async function getLoggedCart(){
      let response =  await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/carts` ,  {headers:header} )
      .catch((error)=>{
         toast.error(error.response?.data.message , {
            position: "top-left"
         });
      })

      if(response?.data.message === "success"){
         setCart(response.data.cart)
      }
   }



   useEffect(() => {
      getLoggedCart()
   }, [])
   

   return (
      <>
         <CartContext.Provider 
            value={{
               addToCart ,
               increaseItemCart ,
               decreaseItemCart , 
               removeItemFromCart ,
               display , 
               setDisplay ,
               getLoggedCart ,
               cart , 
               setCart ,
               loading ,
            }}>
            {props.children}
         </CartContext.Provider>
      </>
   )
}

