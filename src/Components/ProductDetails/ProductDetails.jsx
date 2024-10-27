import React, { Fragment } from 'react';
import "./productDetails.css";

import FooterProductDetails from '../FooterProductDetails/FooterProductDetails.jsx';
import ReviewProductDetails from '../ReviewProductDetails/ReviewProductDetails.jsx';
import ProductInformation from "../ProductInformation/ProductInformation.jsx"
import RelatedProducts from '../RelatedProducts/RelatedProducts.jsx';


import product2 from '../../Assets/images/slider2.jpeg'
import product3 from '../../Assets/images/slider3.jpeg'
import product4 from '../../Assets/images/slider4.jpg'

export default function ProductDetails() {

   const products = [
      {name:'mahmoud' , price:1000 , image:product2} ,
      {name:'ali' , price:3000 ,  image:product3} ,
      {name:'zahraa' , price:2000 ,  image:product3} ,
      {name:'eman' , price:4000 ,  image:product4} 
   ]
   
   return (
      <Fragment>
         <div className="container_productDetails" dir='rtl'>
            <div className="container">
               <ProductInformation/>
               <ReviewProductDetails/>
               <FooterProductDetails/>
            </div>
         </div>


         <div dir='rtl' className='related_products border-top border-2 py-3 my-5'>
            <h2 className='text-center mb-5 mt-2'>منتجات ذات صلة</h2>
            <div className='container'>
               <div className="row g-4 px-lg-5">
                  {products.map((ele)=> <RelatedProducts product={{...ele}}/>)}
               </div>
            </div>
         </div>
      </Fragment>
   )
}
