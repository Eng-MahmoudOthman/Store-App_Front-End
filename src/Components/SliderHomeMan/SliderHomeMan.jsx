import React, { Fragment } from 'react' ;
import Slider from 'react-slick' ;
import "./sliderHomeMan.css" ;

import slider1 from '../../Assets/images/slider1.jpg'
import slider2 from '../../Assets/images/slider2.jpeg'
import slider3 from '../../Assets/images/slider3.jpeg'
import slider4 from '../../Assets/images/slider4.jpg'
import slider5 from '../../Assets/images/slider5.jpeg'
import slider6 from '../../Assets/images/slider6.jpeg'
import slider7 from '../../Assets/images/slider7.jpeg'
import slider8 from '../../Assets/images/slider9.jpeg'
import { Link } from 'react-router-dom';
import $ from 'jquery';


export default function SliderHomeMan() {

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
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
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
                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider1} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black ' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  500%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>


                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider1} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>


                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider2} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>


                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider3} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>


                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider4} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>


                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider5} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>


                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider6} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>


                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider7} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>


                     <div>
                        <Link to={`productDetails/${"fsdfsdfsd898fsd89787d"}`}>
                           <div className="px-3 position-relative">
                              <img src={slider8} className='w-100' height={230} alt="slider1" loading="lazy" />
                              <p className='my-1 text-black' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                              <div className="d-flex justify-content-evenly align-items-center">
                                 <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                                 <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                              </div>
                              <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                              <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                              <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                           </div>
                        </Link>
                     </div>
               </Slider>
            </div>
         </div> 
      </Fragment>
   )
}


