import { Fragment } from "react"
import { Link } from "react-router-dom"




export default function NotFound(){

   return (
      <Fragment>
         <div className="container_notFound">
            
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb  bg-body-secondary  px-5 py-2">
                  <li className="breadcrumb-item"><Link className="text-primary" to="/">الرئيسية</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">الصفحة الحالية</li>
               </ol>
            </nav>

            <div className="container">
               <h1 className="text-center fs-1 mt-5 fw-bold">Not Found Page</h1>
            </div>

         </div>
      </Fragment>
   )
}