import { Fragment } from "react" ;

import "./navbar.css"
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/images/logo.png";

export default function Navbar(){




   return (
      <Fragment>

         <div className="nav-message bg-body-secondary">
            <p className="text-center  m-0 ">&#129395;  خصم 40% لفترة محدودة وخصم 100 جنيه للطلبات +999ج </p>
         </div>

         <div className="container_navbar sticky-top">
            <nav className="navbar navbar-expand-lg " >
               <div className="container">
                  <div className="d-flex justify-content-between icon">
                     <span className="position-relative" >
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="cardList ">0</span>
                     </span>
                     <span className="position-relative">
                        <i className="fa-regular fa-heart"></i> 
                        <span className="wishList ">0</span>
                     </span>
                     <span ><i className="fa-regular fa-user "></i></span>
                     <span><i className="fa-solid fa-magnifying-glass"></i></span>
                  </div>

                  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                     
                     <div className="offcanvas-header">
                        <Link className="navbar-brand" to="/"><img src={logo} width="180" height="30" alt="logo" /></Link>
                        
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                     </div>

                     <div className="offcanvas-body d-none">
                        <ul className="navbar-nav justify-content-center flex-grow-1  pe-3">

                           <li className="nav-item">
                              <NavLink className="nav-link active" aria-current="page" to="/menShoes">أحذية رجالى</NavLink>
                           </li>

                           <li className="nav-item">
                              <NavLink className="nav-link" to="/offers">العروض</NavLink>
                           </li>

                           <li className="nav-item child  position-relative">
                              <NavLink className="nav-link " to="/"><i className="fa-solid fa-chevron-down"></i> اطفالى</NavLink>
                              <div className="child_box position-absolute">
                                 <ul>
                                    <li>
                                       <Link className="nav-link " to="/">شراب انكل رجالى</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/"> شراب طويل رجالى</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/"> شراب هاف رجالى</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/"> شراب غير ظاهر رجالى</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/">الجميع</Link>
                                    </li>
                                 </ul>
                              </div>
                           </li>

                           <li className="nav-item women  position-relative">
                              <NavLink className="nav-link " to="/women-Socks"><i className="fa-solid fa-chevron-down"></i> حريمي</NavLink>
                              <div className="women_box position-absolute">
                                 <ul>
                                    <li>
                                       <Link className="nav-link " to="/women-Socks/ankle">شراب انكل حريمي</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/women-Socks/long-women"> شراب طويل حريمي</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/women-Socks/half"> شراب هاف حريمي</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/women-Socks/invisible"> شراب غير ظاهر حريمي</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/women-Socks">الجميع</Link>
                                    </li>

                                 </ul>
                              </div>
                           </li>

                           <li className="nav-item men position-relative">
                              <NavLink className="nav-link " to="/men-Socks"><i className="fa-solid fa-chevron-down"></i> رجالي</NavLink>
                              <div className="men_box position-absolute">
                                 <ul>
                                    <li>
                                       <Link className="nav-link " to="men-Socks/ankle">شراب انكل رجالى</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="men-Socks/long-men"> شراب طويل رجالى</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="men-Socks/half"> شراب هاف رجالى</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="men-Socks/invisible"> شراب غير ظاهر رجالى</Link>
                                    </li>

                                    <li>
                                       <Link className="nav-link " to="/men-Socks">الجميع</Link>
                                    </li>

                                 </ul>
                              </div>
                           </li>

                        </ul>

                     </div>

                     <div className="sideBar d-block">
                        <div className="accordion accordion-flush" id="accordionFlushExample">

                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    رجالي    
                                 </button>
                              </h2>

                              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                    <div className="accordion-body ">
                                       <ul className="sidBar_link overflow-auto">
                                          <li><Link className="dropdown-item" to="/">شراب انكل رجالى</Link></li>
                                          <li><Link className="dropdown-item" to="/"> شراب طويل رجالى</Link></li>
                                          <li><Link className="dropdown-item" to="/"> شراب طويل رجالى</Link></li>
                                          <li><Link className="dropdown-item" to="/"> شراب غير ظاهر رجالى</Link></li>
                                          <li><Link className="dropdown-item" to="/">الجميع</Link></li>
                                       </ul>
                                    </div>

                              </div>
                           </div>






                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    حريمي   
                                 </button>
                              </h2>

                              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                    <div className="accordion-body">
                                       <ul className="sidBar_link overflow-auto">
                                          <li><Link className="dropdown-item" to="/">شراب انكل حريمي</Link></li>
                                          <li><Link className="dropdown-item" to="/"> شراب طويل حريمي</Link></li>
                                          <li><Link className="dropdown-item" to="/"> شراب هاف حريمي</Link></li>
                                          <li><Link className="dropdown-item" to="/"> شراب غير ظاهر حريمي</Link></li>
                                          <li><Link className="dropdown-item" to="/">الجميع</Link></li>
                                       </ul>
                                    </div>

                              </div>
                           </div>






                           <div className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    اطفالى   
                                 </button>
                              </h2>

                              <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                    <div className="accordion-body">
                                       <ul className="sidBar_link overflow-auto">
                                          <li><Link className="dropdown-item" to="/">اطفال اولادى (من ٢ سنة ل ٤ سنين)</Link></li>
                                          <li><Link className="dropdown-item" to="/">اطفال بناتى (من ٢ سنة ل ٤ سنين)</Link></li>
                                          <li><Link className="dropdown-item" to="/">اطفال اولادى (من ٥ سنين ل ٨ سنين)</Link></li>
                                          <li><Link className="dropdown-item" to="/">اطفال بناتى (من ٥ سنين ل ٨ سنين)</Link></li>
                                          <li><Link className="dropdown-item" to="/">اطفال اولادى (من ٩ سنين ل ١٢ سنة)</Link></li>
                                          <li><Link className="dropdown-item" to="/">اطفال بناتى (من ٩ سنين ل ١٢ سنة)</Link></li>
                                          <li><Link className="dropdown-item" to="/">الجميع</Link></li>
                                       </ul>
                                    </div>

                              </div>
                           </div>






                           <div className="accordion-item">
                              <Link to="/العروض">   
                                 <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                       العروض
                                    </button>
                                 </h2>
                              </Link>
                           </div>






                           <div className="accordion-item">
                              <Link to="/أحذية رجالى ">   
                                 <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                       أحذية رجالى    
                                    </button>
                                 </h2>
                              </Link>
                           </div>

                        </div>
                     </div>

                  </div>

                  <Link className="navbar-brand" to="/"><img src={logo} className="logo-mobile  d-block " width="180" height="30" alt="logo" /></Link>
                  <Link className="navbar-brand logo_Navbar_lg d-none" to="/"><img src={logo} width="150" height="30" alt="logo" /></Link>

                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle ">
                     <span className="navbar-toggler-icon" />
                  </button>
               </div>
            </nav>
         </div>

      </Fragment>
   )
}