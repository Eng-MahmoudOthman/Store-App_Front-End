import axios from "axios";
import { useFormik } from "formik" ;
import { Fragment , useContext, useState } from "react";
import * as Yup from 'yup';
import style from "./register.module.css" ;
import Loading from "../Loading/Loading.jsx";
import { UserContext } from "../../Context/UserContext.js";
import notification from "../../Utilities/notification.js";


export default function Register(){
   const [error , setError] = useState(null) ;
   const [loading , setLoading] = useState(false) ;
   const [showPassword, setShowPassword] = useState(false) ;
   const {openLogin , closeRegister , showRegister} = useContext(UserContext) ;


   function handleOpenModel(){
      closeRegister() ;
      openLogin() ;
   }



   async function submitRegister(values , { resetForm }){
      console.log(values);
      
      setLoading(true)
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/signUp` , values)
      .then(({data})=>{
         if(data.message === "success"){
            setLoading(false) ;
            handleOpenModel() ;
            notification("success" , "Create Account Successfully")
         }
         resetForm();
      })
      .catch((error)=>{
         setError(error.response.data.message)
         notification("error" , error.response.data.message  )
         setLoading(false)
      })
   }

   let validationSchema = Yup.object().shape({
      name:Yup.string().min(2 , "Name Should be More than 2").max(100 , "Name less than 100").required("Name is Required").trim() ,
      phone:Yup.string().required().matches(/^01[0125][0-9]{8}$/).trim() ,
      email:Yup.string().email().required().trim() ,
      password:Yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]?).{8,}$/ , "Should be Password Start UpperCase And Contain 8 Character And Contain any (@#$%&*)") ,
      rePassword:Yup.string().oneOf([Yup.ref("password")]  , "rePassword Should be Same Password").required() ,
   })

   let formik = useFormik({
      initialValues:{
         name:"" ,
         phone:"" ,
         email:"" ,
         password:"" ,
         rePassword:"" 
      } , validationSchema , 
      onSubmit:submitRegister
   })




   return (
      <Fragment>
         {showRegister && (
            <div className="register-container p-3 m-auto">
               <div className="modal fade show d-block" tabIndex="-1"  >
                  <div className="modal-dialog ">
                     <div className="modal-content">

                        <div className="modal-header">
                           <h2 className="modal-title" id="registerLabel">Create Account</h2>
                           <button onClick={closeRegister} className="btn-close" ></button>
                        </div>

                        <div className="modal-body">
                           <p className="sub-title text-center">Please Enter The Correct Information.</p>
                           <form action="" className="px-4  border border-2 rounded-3 shadow-sm" onSubmit={formik.handleSubmit}>
                              {error?<div className="alert alert-danger w-75  my-4">{error}</div> :""}

                              <div className="my-4 position-relative">
                                 <i className="fas fa-user icon-input-field"></i>
                                 <label htmlFor="name" className="form-label required">Enter User Name</label>
                                 <input type="text" 
                                    value={formik.values.name}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    className={`${style.form} form-control`}  id="name"  
                                    name="name" 
                                    required
                                    placeholder="Full Name" />
                                 {formik.errors.name && formik.touched.name?<div className="text-danger m-0 p-0">{formik.errors.name}</div> :""}
                              </div>


                              <div className="my-4 position-relative">
                                 <i className="fa-solid fa-envelope-circle-check icon-input-field"></i>
                                 <label htmlFor="email" className="form-label required">Enter User Email</label>
                                 <input type="email" 
                                    value={formik.values.email}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    className={`${style.form} form-control`} id="email"  
                                    name="email" 
                                    required
                                    placeholder="Email" />
                                 {formik.errors.email  && formik.touched.email?<div className="text-danger m-0 p-0">{formik.errors.email}</div> :""}
                              </div>


                              <div className="my-4 position-relative">
                                 <i className="fa-solid fa-mobile-screen-button icon-input-field"></i>
                                 <label htmlFor="phone" className="form-label required">Enter User Phone</label>
                                 {/* <input type="tel"  */}
                                 <input type="text" 
                                    value={formik.values.phone}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    className={`${style.form} form-control`} id="phone"  
                                    name="phone" 
                                    required
                                    placeholder="01X XXX XXX XX" />
                                 {formik.errors.phone && formik.touched.phone?<div className="text-danger m-0 p-0">{formik.errors.phone}</div> :""}
                              </div>


                              <div className="my-4 position-relative">
                                 <i className="fas fa-lock icon-input-field"></i>
                                 <label htmlFor="password" className="form-label required">Enter Password</label>
                                 <input type={showPassword ? "text" : "password"} 
                                    value={formik.values.password}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    className={`${style.form} form-control`} id="password"  
                                    name="password" 
                                    required
                                    autoComplete="new-password"
                                    placeholder="Password" 
                                    
                                    /** ==== Prevent Copy , Cut , paste , Right Click ==== */
                                    onCopy={(e) => e.preventDefault()}
                                    onPaste={(e) => e.preventDefault()}
                                    onCut={(e) => e.preventDefault()}
                                    onContextMenu={(e) => e.preventDefault()}
                                 />
                                 {formik.errors.password && formik.touched.password?<div className="text-danger m-0 p-0">{formik.errors.password}</div> :""}

                                 {showPassword ? (
                                       <i className="fas fa-eye toggle-password" onClick={() => setShowPassword(false)}></i>
                                    ) : (
                                       <i className="fas fa-eye-slash toggle-password" onClick={() => setShowPassword(true)}></i>
                                    )
                                 }
                              </div>


                              <div className="my-4 position-relative">
                                 <i className="fa-solid fa-unlock-keyhole  icon-input-field"></i>
                                 <label htmlFor="rePassword" className="form-label required">Re Password</label>
                                 <input type={showPassword ? "text" : "password"} 
                                    value={formik.values.rePassword}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    className={`${style.form} form-control`} id="rePassword"  
                                    name="rePassword" 
                                    required
                                    autocomplete="new-password"
                                    placeholder="Re-Password" 
                                    
                                    /** ==== Prevent Copy , Cut , paste , Right Click ==== */
                                    onCopy={(e) => e.preventDefault()}
                                    onPaste={(e) => e.preventDefault()}
                                    onCut={(e) => e.preventDefault()}
                                    onContextMenu={(e) => e.preventDefault()}
                                    />
                                 {formik.errors.rePassword && formik.touched.rePassword?<div className="text-danger m-0 p-0">{formik.errors.rePassword}</div> :""}
                              </div>


                              <div className="d-grid gap-2 col-8 mx-auto">
                                 {loading ? 
                                       <button className="btn bg-main text-white mt-2 p-1"> <Loading color="white"  width={25} height={25} strokeWidth="6"/></button>
                                    : 
                                       <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn bg-main text-white mt-2">Create Account</button>
                                 }
                                 <p className={`${style.login_text} text-center mt-1`}>Log in to your account !<span  onClick={handleOpenModel} className=' mx-3 btn small p-0 m-0 text-primary'>Login</span></p>
                              </div>
                              
                           </form>
                        </div>


                     </div>
                  </div>
               </div>
            </div>
         )}
      </Fragment>
   )
} ;



