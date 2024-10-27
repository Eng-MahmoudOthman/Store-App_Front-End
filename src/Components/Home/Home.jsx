import { Fragment } from "react";
import { Helmet } from 'react-helmet';
import FeaturedHome from "../FeaturedHome/FeaturedHome.jsx";
import PrimaryHome from "../PrimaryHome/PrimaryHome.jsx";
import CounterHome from "../CounterHome/CounterHome.jsx";
import SliderHomeMan from "../SliderHomeMan/SliderHomeMan.jsx";
import SliderHomeWomen from "../SliderHomeWomen/SliderHomeWomen.jsx";



export default function Home (){






   return (
      <Fragment>
         <Helmet>
            <title>Store App Home</title>
         </Helmet>
         
         <PrimaryHome/>
         <FeaturedHome/>
         <SliderHomeMan/>
         <CounterHome/>
         <SliderHomeWomen/>
      </Fragment>
   )
} 