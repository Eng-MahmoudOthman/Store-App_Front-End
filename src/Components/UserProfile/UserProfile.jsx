import React, { useContext } from 'react' ;
import "./userProfile.css" ;

import { Fragment } from 'react'
import { UserContext } from '../../Context/UserContext.js';

export default function UserProfile() {
   const{loggedUser} = useContext(UserContext) ;

   return (
      <Fragment>
         <div className="container my-5">
            <div className="row justify-content-center">
               <div className="col-md-6">
                  <div className="card shadow-sm">
                     <div className="card-body text-center">
                        <img
                           src=""
                           alt="Profile"
                           className="rounded-circle mb-3"
                           width="150"
                           height="150"
                        />
                        <h4 className="card-title mb-1">{loggedUser?.name}</h4>
                        <p className="text-muted mb-3">{loggedUser?.role}</p>

                        <ul className="list-group list-group-flush text-start">
                           <li className="list-group-item">
                              <strong>Email:</strong> {loggedUser?.email}
                           </li>
                           <li className="list-group-item">
                              <strong>Phone:</strong> {loggedUser?.phone}
                           </li>
                        </ul>

                        <button className="btn btn-primary mt-4 px-4">
                           Edit Profile
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
