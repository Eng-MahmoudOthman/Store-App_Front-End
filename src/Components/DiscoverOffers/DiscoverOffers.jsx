import React, { Fragment } from 'react'
import "./discoverOffers.css"
import { Link } from 'react-router-dom'
import image1 from "../../Assets/images/Women-300x300.jpg"





export default function DiscoverOffers() {


   const getData = (data)=>{
      console.log(data);
   }

   return (
      <Fragment>
         <div className="container_discoverOffers">
            <div>
               <nav aria-label="breadcrumb ">
                  <ol class="breadcrumb bg-body-secondary  px-5 py-2 justify-content-center">
                     <li class="breadcrumb-item"><Link class="text-primary" to="/">الرئيسية</Link></li>
                     <li class="breadcrumb-item"><Link class="text-primary" to="/first_Page">المتجر</Link></li>
                     <li class="breadcrumb-item active" aria-current="page">عروض اليوم</li>
                  </ol>
               </nav>
            </div>

            <div className="container">

               {/* <div className="alertOffers bg-body-secondary">
                  <p className='m-0 p-1' dir='rtl'> لا توجد منتجات تتوافق مع اختيارك .</p>
               </div> */}

               <div className="row justify-content-between align-items-center my-5 mx-2">

                  <div className="col-6 col-md-3">
                     <form action="" dir='rtl'>
                        <input onChange={(e)=>getData(e.target.value)} className="form-control border-start-0 border-end-0 border-top-0 rounded-0" list="datalistOptions" id="exampleDataList" placeholder="الترتيب الافتراضي" />
                        <datalist id="datalistOptions">
                           <option selected>الترتيب الافتراضي</option>
                           <option value="ترتيب حسب الشهرة">ترتيب حسب الشهرة</option>
                           <option value="ترتيب حسب معدل التقييم">ترتيب حسب معدل التقييم</option>
                           <option value="ترتيب حسب الأحدث">ترتيب حسب الأحدث</option>
                           <option value="ترتيب حسب: الأدنى سعراً للأعلى">ترتيب حسب: الأدنى سعراً للأعلى</option>
                           <option value="ترتيب حسب: الأعلى سعراً للأدنى">ترتيب حسب: الأعلى سعراً للأدنى</option>
                        </datalist>
                     </form>
                  {/* <div dir='rtl'>
                     <input onChange={(e)=>getData(e.target.value)} className="form-control border-start-0 border-end-0 border-top-0 rounded-0" list="datalistOptions" id="exampleDataList" placeholder="الترتيب الافتراضي" />
                     <datalist id="datalistOptions">
                        <option selected>الترتيب الافتراضي</option>
                        <option value="ترتيب حسب الشهرة">ترتيب حسب الشهرة</option>
                        <option value="ترتيب حسب معدل التقييم">ترتيب حسب معدل التقييم</option>
                        <option value="ترتيب حسب الأحدث">ترتيب حسب الأحدث</option>
                        <option value="ترتيب حسب: الأدنى سعراً للأعلى">ترتيب حسب: الأدنى سعراً للأعلى</option>
                        <option value="ترتيب حسب: الأعلى سعراً للأدنى">ترتيب حسب: الأعلى سعراً للأدنى</option>
                     </datalist>
                  </div> */}

                  </div>

                  <div className="col-6 col-md-9">
                     <h6 className='' dir='rtl'>عرض جميع النتائج <span className='main-color fw-bold d-inline-block me-2'>10</span></h6>
                     {/* <h4>عرض النتيجة الوحيدة</h4> */}
                  </div>

               </div>


               <div className="row justify-content-end my-5 gy-3">
                  <div className="col-md col-md-3 col-6">
                     <div className="position-relative">
                        <img src={image1} className='w-100' height={230} alt="slider1" loading="lazy" />
                        <p className='my-1' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                        <div className="d-flex justify-content-evenly align-items-center">
                           <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                           <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                        </div>
                        <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                        <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                        <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                     </div>
                  </div>

                  <div className="col-md col-md-3 col-6">
                     <div className=" position-relative">
                        <img src={image1} className='w-100' height={230} alt="slider1" loading="lazy" />
                        <p className='my-1' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                        <div className="d-flex justify-content-evenly align-items-center">
                           <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                           <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                        </div>
                        <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                        <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                        <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                     </div>
                  </div>
                  
                  <div className="col-md col-md-3 col-6">
                     <div className="position-relative">
                        <img src={image1} className='w-100' height={230} alt="slider1" loading="lazy" />
                        <p className='my-1' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                        <div className="d-flex justify-content-evenly align-items-center">
                           <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                           <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                        </div>
                        <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                        <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                        <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                     </div>
                  </div>

                  <div className="col-md col-md-3 col-6">
                     <div className="position-relative">
                        <img src={image1} className='w-100' height={230} alt="slider1" loading="lazy" />
                        <p className='my-1' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                        <div className="d-flex justify-content-evenly align-items-center">
                           <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                           <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                        </div>
                        <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                        <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                        <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                     </div>
                  </div>

                  <div className="col-md col-md-3 col-6">
                     <div className="position-relative">
                        <img src={image1} className='w-100' height={230} alt="slider1" loading="lazy" />
                        <p className='my-1' dir='rtl'>مجموعة 6 شرابات غير ظاهرة كود 4</p>
                        <div className="d-flex justify-content-evenly align-items-center">
                           <p className='text-body-secondary fw-bold' dir='rtl'>1140 جنيه </p>
                           <p className='text-body-secondary text-decoration-line-through fw-bold' dir='rtl'>4230 جنيه </p>
                        </div>
                        <button className='btn btn-cart main-btn btn-discovery w-100'>إضافة إلى السلة</button>
                        <div className='position-absolute text-white div_sale' dir='rtl'>وفر  50%  </div>
                        <button className='border-0 position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center wishList_icon'><i class="fa-regular fa-heart"></i></button>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </Fragment>
   )
}


