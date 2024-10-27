
import React, { Fragment } from 'react' ;
import "./downTime.css"

export default function DownTime({style}) {

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
