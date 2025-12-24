import React, { useContext, useEffect, useState } from 'react' ;
import { Fragment } from 'react';
import { useFormik } from "formik" ;
import * as Yup from 'yup';
import { CartContext } from '../../Context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import style from "./checkout.module.css" ;
import Loading from '../Loading/Loading.jsx';





export default function Checkout() {
   const [displayPayment , setDisplayPayment] = useState(false) ;
   const [paymentMethod , setPaymentMethod] = useState(2) ;
   const navigate = useNavigate() ;
   const {applyCoupon , getLoggedCart , createOrder , createOnlineOrder , getPaymentMethods , methods , cart , loading } = useContext(CartContext) ;


      // Create Order ;
      async function submitCreateOrder(values , { resetForm }){
         if(displayPayment){
            values.payment_method_id = paymentMethod ;
            values.payment_Type = "card" ;
            createOnlineOrder(values) ;
         }else{
            createOrder(values) ;
            navigate("/order") ;         
         } ;
         resetForm() ;
      }
      const validationSchemaCreateOrder = Yup.object({
         name:Yup.string().required().trim() ,
         phone:Yup.string().required().trim() ,
         street:Yup.string().required().trim() ,
         city:Yup.string().required().trim()
      })
      const formikCreateOrder = useFormik({
         initialValues:{
            name:"" ,
            phone:"" ,
            street:"" ,
            city:"" ,
         } , validationSchemaCreateOrder , 
         onSubmit:submitCreateOrder
      })


      // Apply Coupon ;
      async function submitApplyCoupon(values , { resetForm }){
         applyCoupon(values) ;
         resetForm() ;
      }
      const validationSchema = Yup.object({
         code:Yup.string().required().trim()
      })
      const formik = useFormik({
         initialValues:{
            code:"" ,
         } , validationSchema , 
         onSubmit:submitApplyCoupon
      })




      function handleChooseMethod (e){
         setDisplayPayment(e.target.checked) ; 
         getPaymentMethods() ;
      }
   
      useEffect(() => {
         getLoggedCart() ;
      }, [])

   return (
      <Fragment>
         <div className='container'>
            <section className="container py-5" dir="rtl" style={{ textAlign: 'right' }}>
            <h1 className="text-center fw-bold mb-5 main-color">إتمام الطلب</h1>
            <div className="row g-4">
               {/* بيانات العميل */}
               <div className="col-md-7">
                  <div className="card shadow-sm border-0 rounded-4">
                  <div className="card-body">
                     <h5 className="mb-4 main-color"> بيانات الشحن</h5>

                        <form onSubmit={formikCreateOrder.handleSubmit}>
                           <div className="mb-3">
                              <label htmlFor='name' className="form-label">الاسم الكامل</label>
                              <input type="text" 
                                 value={formikCreateOrder.values.name}
                                 onChange={formikCreateOrder.handleChange} 
                                 onBlur={formikCreateOrder.handleBlur}
                                 className="form-control" id="name"  
                                 name="name" 
                                 required
                                 placeholder="اكتب اسمك"  
                              />
                              {
                                 formikCreateOrder.errors.name  && formikCreateOrder.touched.name?
                                    <div className="text-danger m-0 p-0">{formikCreateOrder.errors.name}</div> 
                                    : 
                                    <p className="text-success m-0 p-0"></p>
                              }
                           </div>

                           <div className="mb-3">
                              <label htmlFor='phone' className="form-label">رقم الهاتف</label>
                              <input type="text" 
                                 value={formikCreateOrder.values.phone}
                                 onChange={formikCreateOrder.handleChange} 
                                 onBlur={formikCreateOrder.handleBlur}
                                 className="form-control" id="phone"  
                                 name="phone" 
                                 required
                                 placeholder="01xxxxxxxxx"  
                              />
                              {
                                 formikCreateOrder.errors.phone  && formikCreateOrder.touched.phone?
                                    <div className="text-danger m-0 p-0">{formikCreateOrder.errors.phone}</div> 
                                    : 
                                    <p className="text-success m-0 p-0"></p>
                              }
                           </div>

                           <div className="mb-3">
                              <label htmlFor='city' className="form-label">المحافظة</label>
                              <input type="text" 
                                 value={formikCreateOrder.values.city}
                                 onChange={formikCreateOrder.handleChange} 
                                 onBlur={formikCreateOrder.handleBlur}
                                 className="form-control" id="city"  
                                 name="city" 
                                 required
                                 placeholder="المحافظة "   
                              />
                              {
                                 formikCreateOrder.errors.city  && formikCreateOrder.touched.city?
                                    <div className="text-danger m-0 p-0">{formikCreateOrder.errors.city}</div> 
                                    : 
                                    <p className="text-success m-0 p-0"></p>
                              }
                           </div>

                           <div className="mb-3">
                              <label className="form-label">المدينة </label>
                              <input type="text" 
                                 value={formikCreateOrder.values.street}
                                 onChange={formikCreateOrder.handleChange} 
                                 onBlur={formikCreateOrder.handleBlur}
                                 className="form-control" id="street"  
                                 name="street" 
                                 required
                                 placeholder="المدينة - الشارع "   
                              />
                              {
                                 formikCreateOrder.errors.street  && formikCreateOrder.touched.street?
                                    <div className="text-danger m-0 p-0">{formikCreateOrder.errors.street}</div> 
                                    : 
                                    <p className="text-success m-0 p-0"></p>
                              }
                           </div>


                           <div className="form-check form-switch">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 role="switch"
                                 id="paymentMethod"
                                 onChange={(e)=>{handleChooseMethod(e)}}
                              />
                              <label className="form-check-label" htmlFor="paymentMethod">
                                 تفعيل الدفع بالفيزا
                              </label>
                           </div>

                           {displayPayment?
                              <div className="payment-methods ">
                                 {methods.length? 
                                 <>
                                    {methods.map((ele)=>  
                                    <div className="form-check payment-item">
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          name="paymentMethod"
                                          id="visa"
                                          onChange={()=>{setPaymentMethod(ele.paymentId)}}
                                       />
                                       <label className="form-check-label d-flex align-items-center gap-3" htmlFor="visa">
                                          <img src={ele.logo} style={{width:30}} alt="Visa" width="45" />
                                          <span>{ele.name_en}-{ele.name_ar}</span>
                                       </label>
                                    </div>
                                 )}
                                 </>
                                    :
                                    <Loading/>
                                 }
                              </div>
                           : ""}



                           {loading ? 
                              <button className="btn bg-main  w-100 mt-3"> <i className="fa-solid fa-spinner fa-spin fa-rotate-180 fa-xl"></i></button>
                              : 
                              <button disabled={!(formikCreateOrder.isValid && formikCreateOrder.dirty)} type="submit" className="btn bg-main w-100 mt-3">  تأكيد الطلب</button>
                           }
                        </form>


                  </div>
                  </div>
               </div>

               {/* ملخص الطلب */}
               <div className="col-md-5">
                  <div className="card shadow-sm border-0 rounded-4">
                     <div className="card-body">
                        <h5 className="mb-4 main-color"> ملخص الطلب</h5>
                        <div className="d-flex justify-content-between mb-2">
                           <span>إجمالي المنتجات</span>
                           <span>{cart.total_Price_After_Discount?.Total - cart.total_Price_After_Discount?.discount_Amount - 60 || 0} ج.م</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                           <span>الشحن</span>
                           <span>60 ج.م</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2 text-success">
                           <span>الخصم</span>
                           <span>- {cart.total_Price_After_Discount?.discount_Amount || 0} ج.م</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between fw-bold mb-4">
                           <span>الإجمالي</span>
                           <span>{cart.total_Price_After_Discount?.Total || "00.00"} ج.م</span>
                        </div>

                        {/*Discount Coupon  */}
                        <div className="input-group mb-3" dir='ltr'>
                           <form action="" className="input-group" onSubmit={formik.handleSubmit}>
                              <input type="text" 
                                 value={formik.values.code}
                                 onChange={formik.handleChange} 
                                 onBlur={formik.handleBlur}
                                 className="form-control" id="coupon"  
                                 name="code" 
                                 required
                                 placeholder="Enter Coupon Code" 
                              />

                              {loading ? 
                                 <button className="btn bg-main "> <i className="fa-solid fa-spinner fa-spin fa-rotate-180 fa-xl"></i></button>
                                 : 
                                 <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn bg-main">تطبيق</button>
                              }
                           </form>
                           {
                              formik.errors.code  && formik.touched.code?
                                 <div className="text-danger m-0 p-0">{formik.errors.code}</div> 
                                 : 
                                 <p className="text-success m-0 p-0"></p>
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            </section>
         </div>
      </Fragment>
   )
}
