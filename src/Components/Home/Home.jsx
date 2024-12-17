import { Fragment } from "react";
import { Helmet } from 'react-helmet';
import FeaturedHome from "../FeaturedHome/FeaturedHome.jsx";
import PrimaryHome from "../PrimaryHome/PrimaryHome.jsx";
import CounterHome from "../CounterHome/CounterHome.jsx";
import SliderHomeWomen from "../SliderHomeWomen/SliderHomeWomen.jsx";
import SliderHomeMen from "../SliderHomeMen/SliderHomeMen.jsx";


import Swal from 'sweetalert2';
import toast from "react-hot-toast";


export default function Home (){



   const appearNotification = ()=>{
      const Toast = Swal.mixin({
         toast: true,
         position: "top-end",
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true,
         didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
         }
      });

      Toast.fire({
         icon: "success",
         title: "Signed in successfully"
      });
   }

   return (
      <Fragment>
         <button className="btn btn-success" onClick={()=>appearNotification()}>Click</button>
         <Helmet>
            <title>Store App Home</title>
         </Helmet>
         
         <PrimaryHome/>
         <FeaturedHome/>
         <SliderHomeMen/>
         <CounterHome/>
         <SliderHomeWomen/>
      </Fragment>
   )
} 