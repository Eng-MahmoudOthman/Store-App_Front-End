import React, { Fragment, useState } from 'react';
import "./RelatedProducts.css" ;

import product1 from '../../Assets/images/slider1.jpg'


import { Link } from 'react-router-dom';

export default function RelatedProducts({product}) {

   const [addWishList , setAddWishList] = useState(false) ;


   function addToCart(id){
      console.log( "Add To Cart" , id);
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
         <div className="col-lg-3 col-md-4 col-6">
            <div className='card border-0'>
                  <div className="position-relative">
                     <Link to={`/productDetails/${product.price}`}>
                        <img src={product.image} className='w-100' height={230} alt="slider1" loading="lazy" />
                        <p className='my-1 text-black' dir='rtl'>{product.name}</p>
                        <div className="d-flex justify-content-start align-items-center">
                           <p className='text-body-secondary fw-bold mx-2' dir='rtl'>{product.price} جنيه </p>
                           <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                        </div>
                     </Link>
                     <button onClick={()=>{addToCart(product.price)}} className='btn btn-cart main-btn w-100'>إضافة إلى السلة</button>
                     <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                     <button  onClick={()=>{addToWishList(product.price)}} className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'>
                        {addWishList ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
                     </button>
                  </div>
            </div>
         </div>
      </Fragment>
   )
}



























// import React, { useState } from 'react';
// import "./RelatedProducts.css" ;

// import product1 from '../../Assets/images/slider1.jpg'
// import product2 from '../../Assets/images/slider2.jpeg'
// import product3 from '../../Assets/images/slider3.jpeg'
// import product4 from '../../Assets/images/slider4.jpg'

// import { Link } from 'react-router-dom';

// export default function RelatedProducts({product}) {

//    const [addWishList , setAddWishList] = useState(false) ;


//    function addToCart(id){
//       console.log( "Add To Cart" , id);
//    }

//    function addToWishList(id){
//       setAddWishList(!addWishList)
//       if(!addWishList){
//          console.log(true);
//          console.log( "Add To WishList" , id);
//       }else{
//          console.log(false);
//          console.log( "Remove To WishList" , id);
//       }
//    }



//    return (

//          <div dir='rtl' className='related_products border-top border-2 py-3 my-5'>
//             <h2 className='text-center mb-5 mt-2'>منتجات ذات صلة</h2>
//             <div className='container'>
//             {console.log(product)}

//                <div className="row g-4 px-lg-5">

//                   <div className="col-lg-3 col-md-4 col-6">
//                      <div className='card border-0'>
//                            <div className="position-relative">
//                               <Link to={`/productDetails/${"fsdfsdfsd898fsd811111111"}`}>
//                                  <img src={product1} className='w-100' height={230} alt="slider1" loading="lazy" />
//                                  <p className='my-1 text-black' dir='rtl'>{product.name}</p>
//                                  <div className="d-flex justify-content-start align-items-center">
//                                     <p className='text-body-secondary fw-bold mx-2' dir='rtl'>{product.price} جنيه </p>
//                                     <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
//                                  </div>
//                               </Link>
//                               <button onClick={()=>{addToCart("111111")}} className='btn btn-cart main-btn w-100'>إضافة إلى السلة</button>
//                               <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
//                               <button  onClick={()=>{addToWishList("111111")}} className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'>
//                                  {addWishList ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
//                               </button>
//                            </div>
//                      </div>
//                   </div>

//                   <div className="col-lg-3 col-md-4 col-6">
//                      <div className='card border-0'>
//                            <div className="position-relative">
//                               <Link to={`/productDetails/${"fsdfsdfsd898fsd822222"}`}>
//                                  <img src={product2} className='w-100' height={230} alt="slider1" loading="lazy" />
//                                  <p className='my-1 text-black' dir='rtl'>مجموعة000 شرابات غير ظاهرة كود 4</p>
//                                  <div className="d-flex justify-content-start align-items-center">
//                                     <p className='text-body-secondary fw-bold mx-2' dir='rtl'>1140 جنيه </p>
//                                     <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
//                                  </div>
//                               </Link>
//                               <button onClick={()=>{addToCart("22222222")}} className='btn btn-cart main-btn w-100'>إضافة إلى السلة</button>
//                               <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
//                               <button  onClick={(e)=>{addToWishList(e ,"2222222")}}className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'>
//                                  {addWishList ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
//                               </button>
//                            </div>
//                      </div>
//                   </div>

//                   <div className="col-lg-3 col-md-4 col-6">
//                      <div className='card border-0'>
//                            <div className="position-relative">
//                               <Link to={`/productDetails/${"fsdfsdfsd898fsd8233333333"}`}>
//                                  <img src={product3} className='w-100' height={230} alt="slider1" loading="lazy" />
//                                  <p className='my-1 text-black' dir='rtl'>مجموعة000 شرابات غير ظاهرة كود 4</p>
//                                  <div className="d-flex justify-content-start align-items-center">
//                                     <p className='text-body-secondary fw-bold mx-2' dir='rtl'>1140 جنيه </p>
//                                     <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
//                                  </div>
//                               </Link>
//                               <button onClick={()=>{addToCart("333333")}} className='btn btn-cart main-btn w-100'>إضافة إلى السلة</button>
//                               <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
//                               <button  onClick={(e)=>{addToWishList(e , "333333")}}className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'>
//                                  {addWishList ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
//                               </button>
//                            </div>
//                      </div>
//                   </div>

//                   <div className="col-lg-3 col-md-4 col-6">
//                      <div className='card border-0'>
//                            <div className="position-relative">
//                               <Link to={`/productDetails/${"fsdfsdfsd898fsd82444444"}`}>
//                                  <img src={product4} className='w-100' height={230} alt="slider1" loading="lazy" />
//                                  <p className='my-1 text-black' dir='rtl'>مجموعة000 شرابات غير ظاهرة كود 4</p>
//                                  <div className="d-flex justify-content-start align-items-center">
//                                     <p className='text-body-secondary fw-bold mx-2' dir='rtl'>1140 جنيه </p>
//                                     <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
//                                  </div>
//                               </Link>
//                               <button onClick={()=>{addToCart("444444")}} className='btn btn-cart main-btn w-100'>إضافة إلى السلة</button>
//                               <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
//                               <button  onClick={(e)=>{addToWishList(e ,"4444444")}}className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'>
//                                  {addWishList ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
//                               </button>
//                            </div>
//                      </div>
//                   </div>

//                </div>

//             </div>
//          </div>
//    )
// }
