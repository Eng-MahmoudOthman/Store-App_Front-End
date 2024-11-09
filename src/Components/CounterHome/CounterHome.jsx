import React, { Fragment } from 'react'
import "./counterHome.css"
import { Link } from 'react-router-dom'
import $ from 'jquery';
import DownTime from '../DownTime/DownTime.jsx';

export default function CounterHome() {

   //& jQuery Appear Elements :
   $(document).ready(function() {
      $(window).scroll(function() {
         //^ احصل على موقع العنصر الخاص بك
         let elementPosition = $('.move_image').offset()?.top;
         
         //^ احصل على موضع التمرير الحالي
         let scrollPosition = $(window).scrollTop();
         //^ قم بتحديث العملية التي تريد تنفيذها عند ظهور العنصر
         if (scrollPosition > elementPosition - $(window).height()) {
            //^ اعمل شيئًا معينًا عندما يصبح العنصر مرئيًا
            $('.move_image').addClass('show');
            $('.move_counter').addClass('show');
         }
      });
   });


   return (
      <Fragment>
         <div className="container_counterHome p-0 m-0  position-relative">
            <div className="container-fluid p-4">
               <div className="row  justify-content-center align-items-center px-4 ">
               <div className='position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 bg-body-secondary opacity-75'></div>
                  <div className="col-md-6 m-0 p-0 move_image">
                     <div className="image_counter"></div>
                  </div> 

                  <div className="col-md-6 m-0 bg-white move_counter">
                     <h2 className='title-count text-end' >عروض اليوم</h2>
                     <p className='my-4 text-end text-counter' dir='rtl' >
                        مجموعة متنوعة من التصاميم والألوان للاختيار من بينها. وأفضل جزء؟ يمكنك الحصول على هذه الجوارب بسعر لا يهزم اليوم   ! 
                     </p>

                     <div className="d-flex justify-content-end align-items-top">
                        <DownTime/>
                     </div>



                     <div className='text-end mt-2'>
                        <Link to="/discoverOffers" className='btn main-btn btn-discovery'>استكشف المزيد</Link>
                     </div>
                  </div> 
               </div> 
            </div>
         </div>
      </Fragment>
   )
}


