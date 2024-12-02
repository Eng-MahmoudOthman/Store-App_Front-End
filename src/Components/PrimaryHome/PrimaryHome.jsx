import React, { Fragment } from 'react'
import "./primaryHome.css"
import { Link } from 'react-router-dom'
import $ from 'jquery';


export default function PrimaryHome() {


   //& jQuery Appear Elements :
   $(document).ready(function(){
      $('.imgHome').animate({right:0 , opacity:1} , 2000 , ()=>{
         $(".cart_home").slideDown(1000);
      }) ;
   });



   return (
      <Fragment>
         <div className="container_primaryHome">
            <div className="container-fluid">
               <div className="row position-relative">
                  <div className='position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 bg-body-secondary opacity-75'></div>

                  <div className="col-md-6 p-0 m-0 imgHome one_img"></div>
                  <div className="col-md-6 p-0 m-0 imgHome two_img"></div>

                  <div className="cart_home position-absolute">
                     <h4 className="text_home fw-bold">
                        جواربنا المميزة مصنوعة من مواد عالية الجودة توفر أقصى درجات الراحة والمتانة.
                     </h4>
                     <div className='d-flex justify-content-center align-items-center mt-4'>
                        <Link to="/men-Socks" className='main-btn px-4 py-3 mx-1'>شراب رجالي</Link>
                        <Link to="/women-Socks" className='main-btn  px-4 py-3 mx-1'>شراب حريمي</Link>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </Fragment>
   )
}
