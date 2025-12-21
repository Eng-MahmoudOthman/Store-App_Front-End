import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { Fragment } from "react";
import Cart from "../Cart/Cart.jsx";
import WishList from "../WishList/WishList.jsx";
import NetworkStatus from "../NetworkStatus/NetworkStatus.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";

export default function Layout({socket}){
      // const{showLogin , showRegister} = useContext(UserContext) ;
   

   return (
      <Fragment>
         <Navbar/>
         <Outlet></Outlet>
         <NetworkStatus />
         <Cart/>
         <WishList/>
         <Login/>
         <Register/>

         {/* {showLogin && <Login/>}
         {showRegister && <Register/>} */}
         <Footer/>
      </Fragment>
   )
}