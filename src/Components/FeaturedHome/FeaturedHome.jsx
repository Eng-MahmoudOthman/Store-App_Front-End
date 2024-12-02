import React, { Fragment } from 'react'
import "./featuredHome.css"
import { Link } from 'react-router-dom'
import image1 from '../../Assets/images/image1.jpg'
import image2 from '../../Assets/images/image2.jpeg'
import image3 from '../../Assets/images/image3.jpeg'
import image4 from '../../Assets/images/image4.jpeg'
import image5 from '../../Assets/images/image5.jpg'
import image6 from '../../Assets/images/image6.jpeg'
import image7 from '../../Assets/images/image7.png'
import $ from 'jquery';






export default function FeaturedHome() {

      //& jQuery Appear Elements :
      $(document).ready(function() {
         $(window).scroll(function() {
            //^ احصل على موقع العنصر الخاص بك
            const elementPosition = $('.title').offset()?.top;
            //^ احصل على موضع التمرير الحالي
            const scrollPosition = $(window).scrollTop();
            //^ قم بتحديث العملية التي تريد تنفيذها عند ظهور العنصر
            if (scrollPosition > elementPosition - $(window).height()) {
               //^ اعمل شيئًا معينًا عندما يصبح العنصر مرئيًا
               $(".title").addClass("move");
            }
         });
      });


   return (
      <Fragment>
         <div className="container_featureHome ">
            <div className="container" dir='rtl'>
               <div>
                  <h3 className='mx-4 fw-bold title'>تسوق<span className='main-color'> الأن </span>!</h3>
               </div>
               <div className="row justify-content-center ">

                  <div className="col-md-4  col-xl-2 mb-5">
                     <div className='cart_item'>
                        <div className='img_feature'>
                           <img src={image1} alt="product" className='w-100 rounded-circle border border-3 border-light-subtle p-1' />
                        </div>
                        <h5 className='text-center my-3'>أحذية رجالى</h5>
                        <Link className='feature_link text-black text-center d-block ' to="/"> المزيد  <i className="fa-solid fa-arrow-left-long me-3"></i> </Link>
                     </div>
                  </div>


                  <div className="col-md-4  col-xl-2 mt-5">
                     <div className='cart_item'>
                        <div className='img_feature'>
                           <img src={image2} alt="product" className='w-100 rounded-circle border border-3 border-light-subtle p-1' />
                        </div>
                        <h5 className='text-center my-3'>رجالى</h5>
                        <Link className='feature_link text-black text-center d-block ' to="/">المزيد  <i className="fa-solid fa-arrow-left-long me-3"></i>  </Link>
                     </div>
                  </div>


                  <div className="col-md-4  col-xl-2 mb-5">
                     <div className='cart_item'>
                        <div className='img_feature'>
                           <img src={image3} alt="product" className='w-100 rounded-circle border border-3 border-light-subtle p-1' />
                        </div>
                        <h5 className='text-center my-3'>شراب انكل رجالي</h5>
                        <Link className='feature_link text-black text-center d-block ' to="/">المزيد <i className="fa-solid fa-arrow-left-long me-3"></i>  </Link>
                     </div>
                  </div>


                  <div className="col-md-4  col-xl-2 mt-5">
                     <div className='cart_item'>
                        <div className='img_feature'>
                           <img src={image5} alt="product" className='w-100 rounded-circle border border-3 border-light-subtle p-1' />
                        </div>
                        <h5 className='text-center my-3'>شراب طويل رجالى</h5>
                        <Link className='feature_link text-black text-center d-block ' to="/">المزيد <i className="fa-solid fa-arrow-left-long me-3"></i>  </Link>
                     </div>
                  </div>


                  <div className="col-md-4  col-xl-2 mb-5">
                     <div className='cart_item'>
                        <div className='img_feature'>
                           <img src={image4} alt="product" className='w-100 rounded-circle border border-3 border-light-subtle p-1' />
                        </div>
                        <h5 className='text-center my-3'>حريمي</h5>
                        <Link className='feature_link text-black text-center d-block ' to="/">المزيد <i className="fa-solid fa-arrow-left-long me-3"></i>  </Link>
                     </div>
                  </div>


                  <div className="col-md-4  col-xl-2 mt-5">
                     <div className='cart_item'>
                        <div className='img_feature  rounded-circle  border border-3 border-light-subtle'>
                           <img src={image6} alt="product" className='w-100' />
                        </div>
                        <h5 className='text-center my-3'>اطفالى</h5>
                        <Link className='feature_link text-black text-center d-block ' to="/">المزيد <i className="fa-solid fa-arrow-left-long me-3"></i>  </Link>
                     </div>
                  </div>


                  <div className="col-md-4  col-xl-2 mt-5">
                     <div className='cart_item'>
                        <div className='img_feature'>
                           <img src={image7} alt="product" className='w-100 rounded-circle border border-3 border-light-subtle p-1' />
                        </div>
                        <h5 className='text-center my-3'>العروض</h5>
                        <Link className='feature_link text-black text-center d-block ' to="/">المزيد  <i className="fa-solid fa-arrow-left-long me-3"></i>  </Link>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </Fragment>
   )
}


