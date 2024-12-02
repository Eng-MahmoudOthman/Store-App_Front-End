import React, { Fragment } from 'react'




export default function SignIn() {
   return (
      <Fragment>
         <div className="dropdown-menu">
            <form className="px-4 py-3">
               <div className="mb-3">
                  <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
               </div>
               <div className="mb-3">
                  <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
               </div>
               <div className="mb-3">
                  <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                     Remember me
                  </label>
                  </div>
               </div>
               <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="/">New around here? Sign up</Link>
            <Link className="dropdown-item" to="/">Forgot password?</Link>
         </div>
      </Fragment>
   )
}
