
import React, { Fragment, useEffect, useState } from 'react' ;
import "./downTime.css"

export default function DownTime({style}) {

   const[date , setDate] = useState({}) ;
   const[initDate , setInitDate] = useState(new Date()) ;

   
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
         <div className='position-relative mt-5 down_time '>
            <div dir='ltr' className={`d-flex justify-content-center align-items-top timer_productDetails ${style.border}`}>
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

            <div className={` message_counter_productDetails position-absolute bg-white p-1 ${style.display}`}>
               <p className='m-0'>خصم 100 جنيه للطلبات +999ج 🥳</p>
            </div>
         </div>
      </Fragment>
   )
}
