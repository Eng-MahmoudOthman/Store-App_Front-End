import React, { Fragment } from 'react'


export default function Loading() {
   
   return (
      <Fragment>
         <div className="container-fluid position-absolute w-100 h-100 top-0 start-0 bg-body bg-opacity-75 z-3 d-flex justify-content-center align-items-center ">
            <span className="loader"></span>
         </div>
      </Fragment>
   )
}
