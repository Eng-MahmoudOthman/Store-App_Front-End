
import { createContext } from "react";



import product1 from '../Assets/images/slider1.jpg'
import product2 from '../Assets/images/slider2.jpeg'
import product3 from '../Assets/images/slider3.jpeg'
import product4 from '../Assets/images/slider4.jpg'
import product5 from '../Assets/images/slider5.jpeg'
import product6 from '../Assets/images/slider6.jpeg'
import product7 from '../Assets/images/slider7.jpeg'
import product8 from '../Assets/images/slider8.jpeg'
import product9 from '../Assets/images/slider9.jpeg'
import product10 from '../Assets/images/slider10.jpeg'





export const ProductContext = createContext();


export default function ProductContextProvider(props){

   // const [error , setError] = useState(null) ;
   // const [loading , setLoading] = useState(false)
   // const [cart , setCart] = useState([]) ;
   // const [itemCount , setItemCount] = useState(0) ;

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

   // }, [])






   const products = [
      {id: "345sdffhdfydfg7457457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:1000 , image:product10} ,
      {id: "345sdtrrtrhdghdgh7457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:3000 ,  image:product2} ,
      {id: "3423rwerwefydfg457457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:2000 ,  image:product3} ,
      {id: "wrerwefhdfydfg7457457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:5000 ,  image:product4} ,
      {id: "fgdf9hdfydfg74574gd57" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:6000 ,  image:product5} ,
      {id: "tretrdfydfg745745fgh7" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:7000 ,  image:product6} ,
      {id: "ertedfydfg7457457dfhd" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:8000 ,  image:product7} ,
      {id: "787hdfydfg745745ghfgh" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:9000 ,  image:product8} ,
      {id: "574567ffhdfydfg745457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:8800 ,  image:product9} ,
      {id: "568768fhdfydfg7457457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:9900 ,  image:product1} ,
      {id: "265ffhdfydfg7457kj457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:4300 ,  image:product4} ,
      {id: "265ffhdfydfg7457kj457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:4300 ,  image:product4} ,
      {id: "265ffhdfydfg7457kj457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:4300 ,  image:product4} ,
      {id: "265ffhdfydfg7457kj457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:4300 ,  image:product4} ,
      {id: "7684ffhdfydfg74k57457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:7500 ,  image:product3} ,
      {id: "2645hdfydfg745jkk7457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:8500 ,  image:product3} ,
      {id: "0897ydfg745jhkgjg7457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:1800 ,  image:product7} ,
      {id: "799ffhdfydfkghj457457" , name:'مجموعة 6 شرابات غير ظاهرة كود 4' , price:4000 ,  image:product8} 
   ]
   

   return (
      <>
         <ProductContext.Provider 
            value={{
               products
            }}>
            {props.children}
         </ProductContext.Provider>
      </>
   )
}