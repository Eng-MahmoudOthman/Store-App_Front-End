import React from 'react' ;
import { useFormik } from "formik" ;
import * as Yup from 'yup';

import "./ReviewProductDetails.css" ;



export default function ReviewProductDetails() {


   function submitReview(value){
      value.id = "dasfsdf789fsdf5678asds"
      value.user = "mahmoud Othman"
      console.log(value);
   }



   const validationSchema = Yup.object({
      name:Yup.string().min(2 , "Name Should be More than 2").max(50 , "Name less than 50").required("Name is Required").trim() ,
      email:Yup.string().email().required().trim() ,
      rating:Yup.string().required().trim() ,
      message:Yup.string().min(2 , "Message Should be More than 2").max(50 , "Name less than 500").required("Message is Required").trim() ,
   })


   const formik = useFormik({
      initialValues:{
         name:"" ,
         email:"" ,
         rating:"" ,
         message:"" ,
      } , validationSchema , 
      onSubmit:submitReview
   })



   return (
         <div className='review_Product_Details'>
            <nav>
               <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link active " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected=" true"> الوصف</button>
                  <button className="nav-link " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> مراجعات (1)</button>
               </div>
            </nav>


            <div className="tab-content" id="nav-tabContent">
               <div dir='rtl' className="tab-pane fade py-3 px-2" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                  <h2>المراجعات</h2>
                  <p className=' my-4'>لا توجد مراجعات بعد.</p>
                  <h5 className='fw-bold'>كن أول من يقيم “مجموعة 6 شرابات غير ظاهرة كود 4”</h5>
                  <p className='fst-italic text-black-50 fa-sm my-3'>لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ <span className='text-danger'>*</span></p>

                  <form action="" onSubmit={formik.handleSubmit}>
                     <div className='text-end py-2'>
                        <h5>تقييمك <span className='text-danger'>*</span></h5>
                        <div className="rating">
                                 <>
                                    <input type="radio" 
                                       id="star5"
                                       value={5}
                                       onChange={formik.handleChange} 
                                       // onBlur={formik.handleBlur}
                                       name="rating" />
                                    <label htmlFor="star5"/>
                                 </>

                                 <>
                                    <input type="radio" 
                                       id="star4"
                                       value={4}
                                       onChange={formik.handleChange} 
                                       // onBlur={formik.handleBlur}
                                       name="rating" />
                                    <label htmlFor="star4"/>
                                 </>

                                 <>
                                    <input type="radio" 
                                       id="star3"
                                       value={3}
                                       onChange={formik.handleChange} 
                                       // onBlur={formik.handleBlur}
                                       name="rating" />
                                    <label htmlFor="star3"/>
                                 </>

                                 <>
                                    <input type="radio" 
                                       id="star2"
                                       value={2}
                                       onChange={formik.handleChange} 
                                       // onBlur={formik.handleBlur}
                                       name="rating" />
                                    <label htmlFor="star2"/>
                                 </>

                                 <>
                                    <input type="radio" 
                                       id="star1"
                                       value={1}
                                       onChange={formik.handleChange} 
                                       // onBlur={formik.handleBlur}
                                       name="rating" />
                                    <label htmlFor="star1"/>
                                 </>
                        </div>
                     </div>

                     <div className="my-4">
                        <label htmlFor="message" className="form-label h5">مراجعتك <span className='text-danger'>*</span></label>
                        <textarea  id="message" 
                              value={formik.values.message}
                              onChange={formik.handleChange} 
                              onBlur={formik.handleBlur}
                              className="form-control"  
                              name="message" 
                              placeholder="Mahmoud Othman" 
                              cols={15} rows={4}></textarea>
                        {formik.errors.message && formik.touched.message?<div className="alert alert-danger mt-4 p-2">{formik.errors.message}</div> :""}
                     </div>

                     <div className="my-4">
                        <label htmlFor="name" className="form-label h5">الاسم<span className='text-danger'>*</span></label>
                        <input type="text" 
                              value={formik.values.name}
                              onChange={formik.handleChange} 
                              onBlur={formik.handleBlur}
                              className="form-control" id="name"  
                              name="name" 
                              placeholder="Mahmoud Othman" />
                        {formik.errors.name && formik.touched.name?<div className="alert alert-danger mt-4 p-2">{formik.errors.name}</div> :""}
                     </div>

                     <div className="my-4">
                        <label htmlFor="email" className="form-label h5">البريد الإلكتروني<span className='text-danger'>*</span></label>
                        <input type="text" 
                              value={formik.values.email}
                              onChange={formik.handleChange} 
                              onBlur={formik.handleBlur}
                              className="form-control" id="email"  
                              name="email" 
                              placeholder="Example@gmail.com" />
                        {formik.errors.email && formik.touched.email?<div className="alert alert-danger mt-4 p-2">{formik.errors.email}</div> :""}
                     </div>


                     <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn main-btn text-white btn-sm mt-2">
                        إرسال    
                     </button>
                  </form>
               </div>
               


               <div dir='rtl' className="tab-pane fade show active py-3 px-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                  <ul  className='fs-5'>
                     <li>– شراب غير ظاهر مناسب لكل الفصول</li>
                     <li>– الخامة 80% قطن معالج و 20% ليكرا</li>
                     <li>– ضد العرق و الوبر</li>
                     <li>– مقاس موحد من 36 حتي 46</li>
                  </ul>
               </div>
            </div>
         </div>
   )
}
