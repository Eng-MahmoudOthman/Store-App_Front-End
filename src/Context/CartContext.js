import axios from "axios";
import { createContext , useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import notification from "../Utilities/notification.js";
import { UserContext } from "./UserContext.js";




export const CartContext = createContext();

export default function CartContextProvider(props){
   const[display , setDisplay] = useState(true) ;
   const[loading , setLoading] = useState(false) ;
   const {logged , userToken} = useContext(UserContext) ;
   const[cart , setCart] = useState({}) ;
   const[order , setOrder] = useState({}) ;
   const[methods , setMethods] = useState([]) ;

   const header = {
      token:`${process.env.REACT_APP_SECRET_TOKEN} ${userToken}`
   } ;



   async function addToCart(id){
      if(!logged()) return ;

      setLoading(true)
      let response =  await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/carts/add` , {product:id} , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         notification("error" , error.response?.data.message  )
         setDisplay(!display)
      })

      if(response?.data.message === "Added Successfully"){
         setLoading(false)
         notification("success" , response?.data.message )
         setCart(response.data.cart) ;
         setDisplay(!display)
      }
   } ;

   async function applyCoupon(values){
      if(!logged()) return ;

      setLoading(true)
      let response =  await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/carts/coupon` , values , {headers:header} )
      .catch((error)=>{
         setLoading(false) ;
         notification("error" , error.response?.data.message  ) ;
      })

      if(response?.data.message === "Coupon Added Successfully"){
         setLoading(false) ;
         notification("success" , response?.data.message ) ;
         getLoggedCart() ;
      }
   } ;

   async function increaseItemCart(id){
      if(!logged()) return ;
      setLoading(true)
      let response =  await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/carts?quantity=increase` , {product:id} , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         notification("error" , error.response?.data.message  )
      })
      if(response?.data.message === "success"){
         setLoading(false)
         setCart(response.data.cart)
      }
   } ;

   async function decreaseItemCart(id){
      if(!logged()) return ;
      setLoading(true)
      let response =  await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/carts?quantity=decrease` , {product:id} , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         notification("error" , error.response?.data.message  )
      })
      if(response?.data.message === "success"){
         setLoading(false)
         setCart(response.data.cart)
      }
   } ;
   
   async function removeItemFromCart(id){
      if(!logged()) return ;
      setLoading(true)
      let response =  await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/carts/remove/${id}` , {headers:header} )
      .catch((error)=>{
         setLoading(false)
         notification("error" , error.response?.data.message  )
      })
      if(response?.data.message === "Remove Successfully"){
         setLoading(false)
         toast.success(response?.data.message , {
            position: "top-right"
         });
         setCart(response.data.cart)
      }
   } ;
   
   async function getLoggedCart(){
      const header = {
         token:`${process.env.REACT_APP_SECRET_TOKEN} ${localStorage.getItem("token")}`
      }
      const response =  await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/carts` ,  {headers:header} )
      .catch((error)=>{
         setCart({}) ;
         notification("error" , error.response?.data.message  )
      })

      if(response?.data.message === "success"){
         setCart(response.data.cart)
      }
   } ;
   
   async function getLoggedOrders(){
      const header = {
         token:`${process.env.REACT_APP_SECRET_TOKEN} ${localStorage.getItem("token")}`
      }
      const response =  await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/orders` ,  {headers:header} )
      .catch((error)=>{
         setOrder({}) ;
         notification("error" , error.response?.data.message  )
      })

      if(response?.data.message === "success"){
         setOrder(response.data.orders.reverse()[0]) ;
      }
   } ;

   async function createOrder(values){
      if(!logged()) return ;

      setLoading(true)
      let response =  await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/orders` , values , {headers:header} )
      .catch((error)=>{
         setLoading(false) ;
         notification("error" , error.response?.data.message  ) ;
      })

      if(response?.data.message === "success"){
         setLoading(false) ;
         notification("success" , "Create Order Successfully.") ;
         setCart({});
      }
   } ;

   async function getPaymentMethods(values){
      if(!logged()) return ;
      let response =  await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/orders/paymentMethod` , {headers:header} )
      .catch((error)=>{
         notification("error" , error.response?.data.message  ) ;
      })
      if(response?.data.message === "success"){
         setMethods(response?.data.payment_method.data)
      }
   } ;

   async function createOnlineOrder(values){
      if(!logged()) return ;
      setLoading(true)
      let response =  await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/orders/create-session` , values , {headers:header} )
      .catch((error)=>{
         setLoading(false) ;
         notification("error" , error.response?.data.message  ) ;
      })

      if(response?.data.success === true){
         setLoading(false) ;
         window.open(response?.data?.invoice.payment_data.redirectTo, "_blank");
         setCart({});
      }
   } ;

   useEffect(() => {
      if(localStorage.getItem("token") !== null){
         getLoggedCart() ;
      }
   }, [])
   
   return (
      <>
         <CartContext.Provider 
            value={{
               addToCart ,
               applyCoupon ,
               createOrder ,
               getPaymentMethods ,
               createOnlineOrder ,
               increaseItemCart ,
               decreaseItemCart , 
               removeItemFromCart ,
               getLoggedCart ,
               getLoggedOrders ,
               order , 
               setOrder ,
               methods ,
               setMethods ,
               display , 
               setDisplay ,
               cart , 
               setCart ,
               loading ,
            }}>
            {props.children}
         </CartContext.Provider>
      </>
   )
}

