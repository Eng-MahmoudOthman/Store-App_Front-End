import React, { useContext } from 'react' ;

import "./FooterProductDetails.css"
import { CartContext } from '../../Context/CartContext.js';



export default function FooterProductDetails({product}) {
   const{addToCart} = useContext(CartContext) ;



   return (
      <footer>
         <div dir='ltr' className="addProductFixed fixed-bottom bg-white py-1 px-4 d-flex justify-content-between align-items-center" >
            <div className='price_button'>
               <button onClick={()=>{addToCart(product._id)}} className='btn btn-cart main-btn btn-discovery m-0'>إضافة إلى السلة</button>
               <span>
                  <del className='mx-2 fs-6 text-body-tertiary  ' dir='rtl'><span>{product.price} جنيه </span> </del>
                  <span className='fs-6 text-black ' dir='rtl'>{product.priceAfterDiscount} جنيه </span>
               </span>
            </div>

            <div className='d-flex justify-content-between align-items-center'>
               <h6 className='title_productDetails_footer'>{product.name}</h6>
               <img src={product.imgCover?.secure_url} className='image_footer'  alt="product" />
            </div>
         </div>
      </footer>
   )
}
