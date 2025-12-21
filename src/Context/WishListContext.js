import axios from "axios";
import { createContext , useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext.js";
import { CartContext } from "./CartContext.js";




export const WishListContext = createContext();

export default function WishListContextProvider(props){
   const[displayWishList , setDisplayWishList] = useState(true) ;
   const[loading , setLoading] = useState(false) ;
   const[wishList , setWishList] = useState({}) ;
   const{logged , userToken} = useContext(UserContext) ;


   const header = {
      token:`${process.env.REACT_APP_SECRET_TOKEN} ${userToken}`
   }




   async function updateWishList(id){
      if(!logged()) return ;

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
   } ;
   async function getLoggedWishList(){
      const header = {
         token:`${process.env.REACT_APP_SECRET_TOKEN} ${localStorage.getItem("token")}`
      }

      const response =  await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/wishlist` ,  {headers:header} )
      .catch((error)=>{
         toast.error(error.response?.data.message , {
            position: "top-left"
         });
      })

      if(response?.data.message === "success"){
         setWishList(response.data.WishList)
      }
   } ;


   useEffect(() => {
      if(localStorage.getItem("token") !== null){
         getLoggedWishList() ;
      }
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

