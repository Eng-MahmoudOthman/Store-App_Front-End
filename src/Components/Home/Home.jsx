import { Fragment, useContext } from "react";
import { Helmet } from 'react-helmet';
import FeaturedHome from "../FeaturedHome/FeaturedHome.jsx";
import PrimaryHome from "../PrimaryHome/PrimaryHome.jsx";
import CounterHome from "../CounterHome/CounterHome.jsx";
import SliderHomeWomen from "../SliderHomeWomen/SliderHomeWomen.jsx";
import SliderHomeMen from "../SliderHomeMen/SliderHomeMen.jsx";
import { UserContext } from "../../Context/UserContext.js";





export default function Home (){
   const{openLogin , openRegister , logged} = useContext(UserContext) ;




   return (
      <Fragment>
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

