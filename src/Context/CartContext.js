import { createContext , useState } from "react";




export const CartContext = createContext();

export default function CartContextProvider(props){
   const [countItem , setCountItem] = useState(0) ;



   function addToCart(id){
      console.log( "Add To Cart From Cart Context" , id);
   }


















   // const [error , setError] = useState(null) ;
   // const [loading , setLoading] = useState(false)
   // const [cart , setCart] = useState([]) ;

   // let header = {
   //    token:localStorage.getItem("token")  ,
   // };




   // async function addTest (test , company){
   //    let response =   await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/cart` , {test_id:test ,company_id:company} ,  {headers:header} )
   //    .catch((error)=>{
   //       toast.error(error.response?.data.message)
   //    })
   //    if(response?.data.message === "success"){
   //       getLoggedCart()
   //       toast.success(`${response?.data.message }  Add Test in Cart`)
   //    }
   // }
   
   // async function removeTest(test){
   //    let response =   await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/${test}` ,  {headers:header} )
   //    .catch((error)=>{
   //       setError(error.response?.data.message);
   //       toast.error(error.response?.data.message)
   //    })
   //    if(response?.data.message === "success"){
   //       getLoggedCart()
   //       // toast.success(response?.data.message + "  " + "Remove Test in Cart") ;
   //       toast.success( `${response?.data.message }  Remove Test in Cart` ,{
   //          className:"toastAlert",
   //          duration:2000 , 
   //          position:'top-center'});
   //    }
   // }
   
   // async function clearCart(){
   //    let response =   await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/cart` ,  {headers:header} )
   //    .catch((error)=>{
   //       setError(error.response?.data.message);
   //       toast.error(error.response?.data.message)
   //    })
   //    if(response?.data.message === "success"){
   //       getLoggedCart()
   //       setItemCount(0)
   //       toast.success(`${response?.data.message }  Clear Cart`) ;
   //    }
   // }

   // async function getLoggedCart(){
   //    // let header = {
   //    //    token:localStorage.getItem("token")  ,
   //    // };
   //    let response =  await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/userCart` ,  {headers:{token:localStorage.getItem("token")}} )
   //    .catch((error)=>{
   //       setError(error.response?.data.message);
   //    })

   //    if(response?.data.message === "success"){
   //       setError(null)
   //       setCart(response?.data.cart)
   //       setItemCount(response?.data.cart.cartItems.length)
   //    }
   // }


   // useEffect(() => {
   //    getLoggedCart()
   // }, [])
   

   return (
      <>
         <CartContext.Provider 
            value={{
               countItem , 
               setCountItem ,
               addToCart
            }}>
            {props.children}
         </CartContext.Provider>
      </>
   )
}

