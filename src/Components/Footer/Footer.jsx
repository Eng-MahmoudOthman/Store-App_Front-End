import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/donicci-logo.png";
import "./footer.css"

export default function Footer(){


   return (
      <Fragment>
         <footer className="footer text-green text-center bg-body-secondary p-4">
            <div className="container" dir="rtl">
               <div className="row justify-content-between">

                  <div className="col-md-6 col-lg-3 sec_logo mt-4">
                     <div className="d-flex justify-content-start mb-3">
                        <div className="logo_Footer">
                           <Link to="/"><img src={logo} alt="logo" className="w-100" loading="lazy"/></Link>
                        </div>
                     </div>
                     <p className="text_footer text-end" dir="rtl">سواء كنت تبحث عن جوارب كلاسيكية أو أنماط غير تقليدية أو جوارب عصرية في الكاحل ، فلدينا شيء للجميع.
                     </p>
                  </div>

                  <div className="col-md-5 col-lg-3 mt-4">
                     <h2 className="footer_title">تابعنا على</h2>
                     <ul>
                        <li><a className="footer_link" target="_blank"  href="www.facebook.com"><i className="icon fa-brands fa-facebook-f"></i> Facebook</a></li>
                        <li><a className="footer_link" target="_blank"  href="www.instagram.com"><i className="icon ms-3 fa-brands fa-instagram"></i> Instagram</a></li>
                        <li><a className="footer_link" href="sms:+201126999142"><i className=" icon fa-regular fa-envelope"></i> Send SMS  </a></li>
                     </ul>
                  </div>



                  <div className="col-md-6 col-lg-3 mt-4">
                     <h2 className="footer_title">معلومات</h2>
                     <ul>
                        <li><Link to="/" className="footer_link">من نحن</Link></li>
                        <li><Link to="/" className="footer_link">تواصل معنا</Link></li>
                        <li><Link to="/" className="footer_link">سياسة الشحن</Link></li>
                        <li><Link to="/" className="footer_link">سياسة الاستبدال</Link></li>
                     </ul>
                  </div>


                  <div className="col-md-5 col-lg-2 mt-4 ms-3">
                     <h2 className="footer_title">للتواصل</h2>
                     <ul>
                        <li><Link className="footer_link"  to="mailto:mahmoud.osman440@gmail.com"> <i className=" icon fa-regular fa-envelope"></i> info@gmail.com</Link></li>
                        <li><Link className="footer_link"  to="https://wa.me/+201126999142"><i className=" icon fa-brands fa-whatsapp"></i> 01126999142</Link></li>
                        <li><Link className="footer_link"  to="tel:201022496810"><i className="icon fa-solid fa-phone-volume"></i> 01126999142</Link></li>
                        <li><Link  to="/" className="footer_link"><i className="icon fa-solid fa-location-dot"></i> Cairo, Egypt</Link></li>
                     </ul>
                  </div>
               </div>

               <div className="d-flex justify-content-between align-items-center mt-4 ">
                  <p className="p-0 m-0">Powered By <a  href="mailto:mahmoud.osman440@gmail.com" className="developer_link">Mahmoud Othman</a></p>
                  <p className="p-0 m-0"> 2024 Donicci &copy;</p>
               </div>
            </div>
         </footer>
         
         

      </Fragment>
   )
}