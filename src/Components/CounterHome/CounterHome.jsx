import React, { Fragment, useEffect, useState } from 'react'
import "./counterHome.css"
import { Link } from 'react-router-dom'
import $ from 'jquery';
import DownTime from '../DownTime/DownTime.jsx';

export default function CounterHome() {
   const[date , setDate] = useState({}) ;
   const[initDate , setInitDate] = useState(new Date()) ;


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



   setTimeout(() => {
      setInitDate("October 28, 2024 22:19:00")
   }, 5000);

   const downTime = ()=>{
      const countdownTimer = setInterval(()=> {
         let obj = {} ;
         //^ تاريخ الانتهاء المطلوب
         const countdownDate = new Date(initDate).getTime();
         const now = new Date().getTime();
         const distance = countdownDate - now;

         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
         if (distance <= 0) {
            obj.message = `انتهى العد التنازلي`
            setDate(obj) ;
            clearInterval(countdownTimer)
            return ;
         }
         obj = {
            day: days.toString().length===1?` 0${days}`: days ,
            hours: hours.toString().length===1?` 0${hours}`: hours ,
            minute: minutes.toString().length===1?` 0${minutes}`: minutes ,
            second: seconds.toString().length===1?` 0${seconds}`: seconds
         }
         setDate(obj) ;
      }, 1000);
   }











   useEffect(() => {
      downTime()
   }, [initDate]) ;

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
                     <p className='my-1 text-end text-counter' dir='rtl' >
                        مجموعة متنوعة من التصاميم والألوان للاختيار من بينها. وأفضل جزء؟ يمكنك الحصول على هذه الجوارب بسعر لا يهزم اليوم   ! 
                     </p>


                     {date.message ? <h5 className='text-end my-4'>&#128532; {date.message}</h5> 
                     : 
                     // <div className="d-flex justify-content-end align-items-top">

                     //    <div className="second  ms-3 text-center">
                     //       <h4 className='number-counter'>{date.second}</h4>
                     //       <p className=''>ثواني</p>
                     //    </div>

                     //    <div className="dot  ms-3 text-center">
                     //       <h4 className='number-counter'>:</h4>
                     //    </div>

                     //    <div className="minute  ms-3 text-center">
                     //       <h4 className='number-counter'>{date.minute}</h4>
                     //       <p>دقائق</p>
                     //    </div>

                     //    <div className="dot ms-3 text-center">
                     //       <h4 className='number-counter'>:</h4>
                     //    </div>

                     //    <div className="hours ms-3 text-center">
                     //       <h4 className='number-counter'>{date.hours}</h4>
                     //       <p>ساعات</p>
                     //    </div>

                     //    <div className="dot ms-3 text-center">
                     //       <h4 className='number-counter'>:</h4>
                     //    </div>

                     //    <div className="day ms-3 text-center">
                     //       <h4 className='number-counter'>{date.day}</h4>
                     //       <p>ايام</p>
                     //    </div>

                     // </div>
                     <DownTime style={{display:"d-none" , border:"border-0"}}/>
                     }



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


