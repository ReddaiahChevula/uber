import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

    return(
        <>
           <div className="col-3 mx-auto mt-5 border border-3 border-info rounded-4 p-3">
            <h4 className="fw-bold">Login Here</h4>
              <div className=" signup mt-3">
                 <div className="signup_div text-center">
                    <form className="mx-auto">
                        <input type="text" className="form-control " placeholder="Enter Phone number or email" /><br/>
                        <input type="password" className="form-control " placeholder="Enter Password" />
                    </form>
                    <Link to='/'> <button className="btn mt-3 continue_btn">LogIn</button> </Link>
                 </div>
              </div>
           </div>
        </>
    )
}

export default Login;