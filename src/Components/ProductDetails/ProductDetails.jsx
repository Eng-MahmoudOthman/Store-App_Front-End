import React, { Fragment, useContext, useState } from 'react';
import { ProductContext } from '../../Context/ProductContext.js';
import FooterProductDetails from '../FooterProductDetails/FooterProductDetails.jsx';
import ReviewProductDetails from '../ReviewProductDetails/ReviewProductDetails.jsx';
import ProductInformation from "../ProductInformation/ProductInformation.jsx"
import ProductItem from '../ProductItem/ProductItem.jsx';
import "./productDetails.css";
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
   const {id} = useParams() ;
   const [countProduct , setCountProduct] = useState(Math.floor(Math.random()*5)) ;
   const {products} = useContext(ProductContext) ;


   return (
      <Fragment>
         <div className="container_productDetails" dir='rtl'>
            <div className="container">
               <ProductInformation   id={id}/>
               <ReviewProductDetails id={id}/>
               <FooterProductDetails id={id}/>
            </div>
         </div>


         <div  className='related_products border-top border-2 py-3 my-5'>
            <h2 className='text-center mb-5 mt-2'>منتجات ذات صلة</h2>
            <div className='container'>
               <div className="row g-4 px-lg-5">
                  {products.slice(countProduct , countProduct + 4).map((ele)=> <div className="col-lg-3 col-md-4 col-6"><ProductItem product={{...ele}}/></div>)}                  
               </div>
            </div>
         </div>

      </Fragment>
   )
}
