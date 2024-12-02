import { Fragment } from "react"
import { Link } from "react-router-dom"
// import { Switch } from 'antd';




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
               <img src="" className="w-100"/>



                  {/* <div  className=''>
                     <Switch 
                           defaultChecked={true} 
                           // autoFocus={true}
                           // checked={false}
                           disabled={false}
                           // defaultValue={false}
                           // loading={true}
                           checkedChildren="On"
                           unCheckedChildren="Off"
                           onChange={(checked)=>{
                              console.log(checked);
                           }}
                     />
                  </div> */}


            </div>

         </div>
      </Fragment>
   )
}