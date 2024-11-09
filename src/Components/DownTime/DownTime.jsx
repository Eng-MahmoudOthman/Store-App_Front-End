
import React, { Fragment, useEffect, useState } from 'react' ;
import "./downTime.css"

export default function DownTime() {

   const[date , setDate] = useState({}) ;
   const[initDate , setInitDate] = useState(new Date()) ;

   
   setTimeout(() => {
      setInitDate("Tue nov 30 2024 20:52:15 GMT+0200 (Eastern European Standard Time)")
      // setInitDate("October 28, 2024 22:19:00")
   }, 2000);

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
         {date.message ? <h5 className='text-end mb-4'>&#128532; {date.message}</h5> 
         :
            <>
               <div className="second  ms-3 text-center">
                  <h4 className='down_time_number_counter'>{date.second}</h4>
                  <p className='mb-2'>ثواني</p>
               </div>


               <div className="dot  ms-3 text-center">
                  <h4 className='down_time_number_counter'>:</h4>
               </div>

               <div className="minute  ms-3 text-center">
                  <h4 className='down_time_number_counter'>{date.minute}</h4>
                  <p className='mb-2'>دقائق</p>
               </div>

               <div className="dot ms-3 text-center">
                  <h4 className='down_time_number_counter'>:</h4>
               </div>

               <div className="hours ms-3 text-center">
                  <h4 className='down_time_number_counter'>{date.hours}</h4>
                  <p className='mb-0'>ساعات</p>
               </div>

               <div className="dot ms-3 text-center">
                  <h4 className='down_time_number_counter'>:</h4>
               </div>

               <div className="day ms-3 text-center">
                  <h4 className='down_time_number_counter'>{date.day}</h4>
                  <p className='mb-2'>ايام</p>
               </div>
            </>
         }
      </Fragment>
   )
}
