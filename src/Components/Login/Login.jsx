import { useFormik } from "formik" ;
import { Fragment, useContext , useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { UserContext } from "../../Context/UserContext.js";
import Loading from "../Loading/Loading.jsx";
import style from "./login.module.css" ;
import notification from "../../Utilities/notification.js";
import { CartContext } from "../../Context/CartContext.js";
import { WishListContext } from "../../Context/WishListContext.js";

export default function Login(){
   const [error , setError] = useState(null)
   const [loading , setLoading] = useState(false)
   const {closeLogin , openRegister ,  showLogin , setRole , setUserToken , setLoggedUser} = useContext(UserContext) ;
   const {getLoggedCart} = useContext(CartContext) ;
   const {getLoggedWishList} = useContext(WishListContext) ;
   const [showPassword, setShowPassword] = useState(false) ;


   function handleOpenModel(){
      closeLogin() ;
      openRegister() ;
   }


   //& Handle Phone Empty Or Email Empty :
   async function submitLogin(values , { resetForm }){
      setError(null) ;
      setLoading(true)
      const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/signIn` , values)
      .catch((error)=>{
         setLoading(false) ;
         setError(error.response.data.message) ;
         notification("error" , error.response.data.message)
      })

      //^ Check Login Success User :
         if(data?.message === "success"){
            setLoading(false)
            //& save Token In Local Storage And Save Token in Use Context :
            localStorage.setItem("token" , data.token) ;
            const token = data.token ;
            setUserToken(token) ;
            const decoded = jwtDecode(token);
            setLoggedUser(decoded) ;
            setRole(decoded.role) ;
            notification("success" , "Successfully Login 😍 ") ;
            getLoggedCart() ;
            getLoggedWishList() ;
            resetForm() ;
            closeLogin(); 
         }else{
            openRegister() ;
         }
      }
   const validationSchema = Yup.object({
      email:Yup.string().email().required().trim() ,
      password:Yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]?).{7,}$/ , "should be Password Start UpperCase And Contain 8 Character And Contain any (@#$%&*)") ,
   })
   const formik = useFormik({
      initialValues:{
         email:"" ,
         password:"" ,
      } , validationSchema , 
      onSubmit:submitLogin
   })


   return (
      <Fragment>
            {showLogin && (
               <div className="container  shadow-lg">
                  <div className="modal fade show d-block" tabIndex="-1" >
                     <div className="modal-dialog ">
                        <div className="modal-content">

                           <div className="modal-header">
                              <h2 className="modal-title" id="loginLabel">Login</h2>
                              <button onClick={closeLogin} className="btn-close"></button>
                           </div>

                           <div className="modal-body">
                              <div className=" w-100 p-3">
                                 <p dir="rtl" className="sub-title text-center m-0"> 😍 Glad to have you here again </p>
                                 <p className="sub-title text-center">Please Enter Your Email and Correct Password.</p>

                                 <form action="" className=" px-2 bg-white  border border-2 rounded-3 shadow-sm" onSubmit={formik.handleSubmit}>

                                    {error?<p className="text-danger">{error}</p> :""}

                                    <div className="my-3 position-relative">
                                       <i className="fas fa-user icon-input-field"></i>
                                       <label htmlFor="email" className="form-label required">Enter Your Email</label>
                                       <input type="email" 
                                          value={formik.values.email}
                                          onChange={formik.handleChange} 
                                          onBlur={formik.handleBlur}
                                          className={`${style.form} form-control rounded-2`} id="email"  
                                          name="email" 
                                          required
                                          autoComplete="username"
                                          placeholder="Email" />
                                       {
                                          formik.errors.email  && formik.touched.email?
                                             <div className="text-danger m-0 p-0">{formik.errors.email}</div> 
                                             : 
                                             <p className="text-success m-0 p-0"></p>
                                       }
                                    </div>

                                    <div className="my-3 position-relative">
                                       <i className="fas fa-lock icon-input-field"></i>
                                       <label htmlFor="password" className="form-label required">Enter Password</label>
                                       <input  type={showPassword ? "text" : "password"}
                                          value={formik.values.password}
                                          onChange={formik.handleChange} 
                                          onBlur={formik.handleBlur}
                                          className={`${style.form} form-control rounded-2`}  id="password"  
                                          name="password" 
                                          required
                                          autoComplete="current-password"
                                          placeholder="Password" 

                                          /** ==== Prevent Copy , Cut , paste , Right Click ==== */
                                          onCopy={(e) => e.preventDefault()}
                                          onPaste={(e) => e.preventDefault()}
                                          onCut={(e) => e.preventDefault()}
                                          onContextMenu={(e) => e.preventDefault()}
                                          />
                                       {
                                          formik.errors.password && formik.touched.password?
                                             <p className="text-danger m-0 p-0">{formik.errors.password}</p> 
                                             : 
                                             <p className="text-success m-0 p-0"></p>
                                       }

                                       {showPassword ? (
                                          <i className="fas fa-eye toggle-password" onClick={() => setShowPassword(false)}></i>
                                       ) : (
                                          <i className="fas fa-eye-slash toggle-password" onClick={() => setShowPassword(true)}></i>
                                       )}
                                    </div>

                                    <div className="d-grid gap-2 col-12 ">
                                       {loading ? 
                                             <button className="btn bg-main  mt-2 rounded-2 p-1"> <Loading type="oval" color="white"  width={25} height={25} strokeWidth="6"/></button>
                                             // <button className="btn bg-main  mt-2 rounded-0"> <i className="fa-solid fa-spinner fa-spin fa-rotate-180 fa-xl"></i></button>
                                          : 
                                             <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn bg-main  mt-2 rounded-2">Log in</button>
                                       }

                                       <div className="mt-2">
                                          <p className={`${style.login_text} text-center mt-1`}><Link className="m-1 main-color" to="/ForgetPassword" ><i className="fa-solid fa-lock me-2"></i>Forget Password ?</Link></p>
                                          <p className={`${style.login_text} text-center mt-1`}> Register Account !<span onClick={handleOpenModel}  className=' mx-3 btn small p-0 m-0 text-primary'>Create Account</span></p>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
      </Fragment>
   )
} 
