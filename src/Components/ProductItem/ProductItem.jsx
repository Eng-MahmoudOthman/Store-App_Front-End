import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext.js';
import "./ProductItem.css" ;
import LoadingBtn from '../LoadingBtn/LoadingBtn.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';




export default function ProductItem({product}) {
   const{addToCart} = useContext(CartContext) ;
   const [loading , setLoading] = useState(false) ;
   const [addWishList , setAddWishList] = useState(false) ;


   const addItemToCart = async(id)=>{
      setLoading(true)
      await addToCart(id)
      setLoading(false)
   }


   function addToWishList(id){
      setAddWishList(!addWishList)
      if(!addWishList){
         console.log(true);
         console.log( "Add To WishList" , id);
      }else{
         console.log(false);
         console.log( "Remove To WishList" , id);
      }
   }


   return (
      <Fragment>
            <div className='card border-0' >
                  <div className="position-relative">
                     <Link to={`/productDetails/${product.slug}`}>
                        <img src={product.imgCover?.secure_url} className='w-100' height={230} alt="slider1" loading="lazy" />
                        <p className='my-1 text-black' dir='rtl'>{product.name}</p>
                        <div className="d-flex justify-content-evenly align-items-center">
                           <p className='text-body-emphasis fw-bold mx-2' dir='rtl'>{product.priceAfterDiscount} جنيه </p>
                           <p className=' text-body-tertiary text-decoration-line-through fw-bold' dir='rtl'>{product.price} جنيه </p>
                        </div>
                     </Link>
                     <button onClick={()=>{addItemToCart(product._id)}} disabled={loading} className='btn btn-cart main-btn w-100 position-relative '>اضافة الى السلة{loading? <LoadingBtn/> : ""}</button>
                     <div className='position-absolute text-white div_sale' dir='rtl'>وفر  {100-(product.priceAfterDiscount / product.price * 100).toFixed(0)} %  </div>
                     <button  onClick={()=>{addToWishList(product._id)}} className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'>
                        {addWishList ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                     </button>
                  </div>
            </div>
      </Fragment>
   )
}