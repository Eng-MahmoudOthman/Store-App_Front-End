import React , { Fragment , useContext , useState } from 'react' ;
import "./CartItem.css"
import { CartContext } from '../../Context/CartContext.js';

export default function CartItem({item}) {
   const [ alert , setAlert] = useState(false) ;
   const {increaseItemCart , decreaseItemCart , removeItemFromCart } = useContext(CartContext) ;
   
   
   const increase = (id)=>{
      if(item.quantity >= item.product?.quantity){
         setAlert(true)
         return ;
      }
      increaseItemCart(id)
   }

   const decrease = (id)=>{
      decreaseItemCart(id)
      setAlert(false)
   }

   return (
      <Fragment>
         
         <div>
            {alert ? <p className=' alert alert-danger text-center p-0 m-0 rounded-0'>أنتبه !!  لا يوجد مخزون أكثر من ذلك لهذا المنتج </p> : ""}
         </div>

         <div className="cart-item position-relative">
            <div className='inner-cart-item d-flex justify-content-between align-items-center border-0 m-2 mx-4'>
               <div className='d-flex justify-content-between align-items-center p-0 border border-1 rounded-2'>
                  <span>
                     <button onClick={()=>{increase(item.product._id)}} className='btn px-3 py-1'>+</button>
                  </span>
                  <span>{item.quantity}</span>
                  <span>
                     <button onClick={()=>{decrease(item.product._id)}} className='btn px-3 py-1 '>-</button>
                  </span>
               </div>
               
               <div>
                  <p  dir='rtl'>{item.product?.name}</p>
                  <h6 dir='rtl' className='text-body-emphasis fw-bold text-end'>  {item.product?.priceAfterDiscount} جنيه </h6>
               </div>

               <div className="image-cart">
                  <img src={item.product?.imgCover.secure_url} alt="product" className=' w-100' />
               </div>
            </div>


            <button onClick={()=>removeItemFromCart(item.product._id)} className='btn btn-remove border-0 text-danger rounded-0 position-absolute bg-body-secondary d-flex justify-content-center align-items-center'>
               x
            </button>
         </div>

      </Fragment>
   )
}
