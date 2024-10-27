import React, { Fragment } from 'react' ;
import "./ProductInformation.css"
import image1 from "../../Assets/images/Men-4-600x600.jpeg"


export default function ProductInformation() {


   return (
         <Fragment>
            <div className="row my-5 product_information">
               <div className="col-md-6">
                  <div className="m-2 position-relative">
                     <img src={image1} className='w-100' alt="product_image" />
                     <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                  </div>
               </div>

               <div className="col-md-6">
                  <h2 className=''>مجموعه 6 شرابات انكل كود 1089</h2>
                  <div className="d-flex justify-content-start align-items-center my-4">
                     <h4 className='text-black fw-bold mx-3' dir='rtl'>1140 جنيه </h4>
                     <h4 className='text-body-tertiary text-decoration-line-through fw-bold mx-3' dir='rtl'>4230 جنيه </h4>
                  </div>

                  <div className='row justify-content-center align-items-center mt-4 g-2'>
                     <div className='col-3'>
                        <div className='btn_quantity d-flex justify-content-between align-items-center p-0 border border-1'>
                           <span>
                              <button className='btn'>+</button>
                           </span>
                           <span>1</span>
                           <span>
                              <button className='btn'>-</button>
                           </span>
                        </div>
                     </div>
                     <div className="col-9">
                        <div className='text-start'>
                           <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                        </div>
                     </div>
                  </div>

                  <div className='my-4 text_alarm '>
                     <p className='' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="ms-2 text-success" viewBox="0 0 18 18">
                           <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"></path>
                        </svg>
                        18 قاموا بشراء هذا المنتج هذا الاسبوع.
                     </p>
                  </div>

                  <div className='position-relative mt-5'>
                     <div dir='ltr' className="d-flex justify-content-center align-items-top timer_productDetails">
                        <div className="second  ms-3 text-center">
                           <h4 className='number-counter'>34</h4>
                           <p className='mb-2'>ثواني</p>
                        </div>

                        <div className="dot  ms-3 text-center">
                           <h4 className='number-counter'>:</h4>
                        </div>

                        <div className="minute  ms-3 text-center">
                           <h4 className='number-counter'>08</h4>
                           <p className='mb-2'>دقائق</p>
                        </div>

                        <div className="dot ms-3 text-center">
                           <h4 className='number-counter'>:</h4>
                        </div>

                        <div className="hours ms-3 text-center">
                           <h4 className='number-counter'>02</h4>
                           <p className='mb-0'>ساعات</p>
                        </div>

                        <div className="dot ms-3 text-center">
                           <h4 className='number-counter'>:</h4>
                        </div>

                        <div className="day ms-3 text-center">
                           <h4 className='number-counter'>04</h4>
                           <p className='mb-2'>ايام</p>
                        </div>
                     </div>

                     <div className='message_counter_productDetails position-absolute bg-white p-1'>
                        <p className='m-0'>خصم 100 جنيه للطلبات +999ج 🥳</p>
                     </div>
                  </div>


                  <div className="row justify-content-around align-items-center mt-4 g-1">
                     <div className="col-4">
                        <div className='text-center py-1 bg-body-secondary'>
                           <i class="fa-solid  fa-medal"></i>
                           <h6 className='fw-bold'>جودة مضمونة</h6>
                        </div>
                     </div>

                     <div className="col-4">
                        <div className='text-center py-1 bg-body-secondary'>
                           <i class="fa-solid fa-truck-fast"></i>
                           <h6 className='fw-bold'>شحن سريع</h6>
                        </div>
                     </div>

                     <div className="col-4">
                        <div className='text-center py-1 bg-body-secondary'>
                           <i class="fa-solid fa-arrow-right-arrow-left"></i>
                           <h6 className='fw-bold'>استبدال سهل</h6>
                        </div>
                     </div>
                  </div>

                  <div className='mt-3 '>
                     <button className='border-0 bg-white button_add_favorite'><i class="fa-regular fa-heart ms-2"></i>  إضافة للمفضلة</button>
                  </div>
               </div>
            </div>
         </Fragment>
   )
}
