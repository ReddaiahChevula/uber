import React from "react";
import { Link } from "react-router-dom"; 

const SignupContinue = () => {

    return (
        <>
           <div className="mt-5 border border-secondary border-2 col-6 mx-auto p-3 rounded-3">
              <h2 className="text-success">Your Signup was completed successfully.</h2>
              <div className="text-end">
                <Link to='/'>  <button className="btn btn-primary mt-3"> <i class="fa-solid fa-arrow-right"></i> &nbsp; Back to Home</button> </Link>
              </div>
           </div>
        </>
    )
}
export default SignupContinue;