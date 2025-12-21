import { Fragment } from "react";
import useNetwork from "../../Hooks/useNetwork.js"

export default function NetworkStatus() {
   const online = useNetwork();

   if(online) return null ;

   return (
      <Fragment>
         <div className="network fixed-bottom">
            <h3 className="fw-bold my-2">
            <i className="fa-solid fa-wifi p-1 d-inline-block me-2"></i>
               No Internet Connection
            </h3>
            <p className="fa-2xs ">
               Check your connection, then refresh the page.
            </p>
         </div>
      </Fragment>

   );
}
