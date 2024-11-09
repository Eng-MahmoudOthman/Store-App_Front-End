import React, { useContext } from 'react' ;
import image2 from "../../Assets/images/5EC74E59-B4FC-4DCE-AAE6-02270F754406-scaled-85x85.jpeg";

import "./FooterProductDetails.css"
import { CartContext } from '../../Context/CartContext.js';



export default function FooterProductDetails({id}) {
   const{addToCart} = useContext(CartContext) ;



   return (
      <footer>
         <div dir='ltr' className="addProductFixed fixed-bottom bg-white py-1 px-4 d-flex justify-content-between align-items-center" >
            <div className='price_button'>
               <button onClick={()=>{addToCart(id)}} className='btn btn-cart main-btn btn-discovery m-0'>إضافة إلى السلة</button>
               <span>
                  <del className='mx-2 fs-6 text-body-tertiary  ' dir='rtl'><span>4230 جنيه </span> </del>
                  <span className='fs-6 text-black ' dir='rtl'>1140 جنيه </span>
               </span>
            </div>

            <div className='d-flex justify-content-between align-items-center'>
               <h6 className='title_productDetails_footer'>مجموعه 6 شرابات انكل كود 1089</h6>
               <img src={image2} className='image_footer'  alt="image" />
            </div>
         </div>
      </footer>
   )
}
