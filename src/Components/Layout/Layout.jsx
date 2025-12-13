import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { Fragment } from "react";
import Cart from "../Cart/Cart.jsx";
import WishList from "../WishList/WishList.jsx";
import Offline  from "../../Hooks/useNetwork.jsx";

export default function Layout({socket}){
   return (
      <Fragment>
         <Navbar/>

         <Outlet></Outlet>

         {/* <Offline>
            <div className="network fixed-bottom text-danger">
               <i className="fa-solid fa-wifi p-1 "></i> Offline
            </div>
         </Offline> */}

         {/* <Online>
            <div className="network fixed-bottom text-success">
               <i className="fa-solid fa-wifi p-1 "></i> Online
            </div>
         </Online> */}
         
         <Offline/>

         <Cart/>
         <WishList/>

         <Footer/>
      </Fragment>
   )
}