import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

export default function ForgetPassword() {

   const {id} = useParams()

   return (
      <Fragment>
         <Helmet>
            <title>Forget Password Page</title>
         </Helmet>


         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
         </button>


         <div>
            {/* div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"&gt; */}
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                  ...
                  </div>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
               </div>
            </div>
         </div>



         <div>ForgetPassword {id} </div>

      </Fragment>
   )
}
