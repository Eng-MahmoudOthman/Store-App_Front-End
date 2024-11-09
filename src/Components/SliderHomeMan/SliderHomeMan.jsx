import React, { Fragment, useContext, useState } from 'react' ;
import Slider from 'react-slick' ;
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext.js';
import ProductItem from '../ProductItem/ProductItem.jsx';
import $ from 'jquery';
import "./sliderHomeMan.css" ;





export default function SliderHomeMan() {
   const [countProduct , setCountProduct] = useState(Math.floor(Math.random()*5))

   const {products} = useContext(ProductContext)

   //& jQuery Appear Elements :
   $(document).ready(function() {
      $(window).scroll(function() {
         //^ احصل على موقع العنصر الخاص بك
         const elementPosition = $('.head_men').offset()?.top;
         //^ احصل على موضع التمرير الحالي
         const scrollPosition = $(window).scrollTop();
         //^ قم بتحديث العملية التي تريد تنفيذها عند ظهور العنصر
         if (scrollPosition > elementPosition - $(window).height()) {
            //^ اعمل شيئًا معينًا عندما يصبح العنصر مرئيًا
            // $('.head_men').animate(
            //    { deg: 360 },
            //    {
            //       duration: 1200,
            //       step: function(now) {
            //          $(this).css({ transform: 'rotate(' + now + 'deg)' });
            //       }
            //    }
            // );
            $(".head_men").addClass("move");
         }
      });
   });


   const settings = {
      dots: true,
      infinite: true,
      autoplay:true ,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
      {
         breakpoint: 1300,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
         }
      },
      {
         breakpoint: 500,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1
         }
      }
      ]
   };


   return (
      <Fragment>
         <div className="container_sliderHomeMan" dir='rtl'> 
            <div className="d-flex justify-content-between align-items-center">
               <h3 className='me-4 fw-bold head_men'>شرابات <span className='main-color'>رجالى</span>!</h3>
               <Link to="manSocks" className='btn_slider bg-transparent rounded-1 border border-1 border-black ms-4'>استكشف المزيد</Link>
            </div>

            <div className="slider-container my-5 mx-5" >
               <Slider {...settings}>
                  {products.slice(countProduct , countProduct + 8).map((ele)=>  <div className="px-3"> <ProductItem product={{...ele}}/></div>)}
               </Slider>
            </div>
         </div> 
      </Fragment>
   )
}
