import React from "react";
import { Link } from "react-router-dom";


const SignUp = () => {

    return(
        <>
            <div className="col-3 mx-auto mt-4">
                
                    <div className=" signup">
                        <div className="signup_div text-center">
                                 <h5>What's your phone number or email?</h5>
                                 <div className="mt-3">
                                 <form className="mx-auto">
                                    <input type="text" className="form-control " placeholder="Enter Phone number or email" />
                                 </form>
                                 </div>
                                 <Link to='/SignupContinue'> <button className="btn mt-3 continue_btn">Continue</button> </Link>
                                 <h5 className=" mt-2">or</h5>
                                 <button className="btn border-0"><img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" width={15} /> Continue with Google</button><br/>
                                 <button className="btn mt-3 border-0"><i class="fa-brands fa-apple"></i> Continue with Apple</button>
                                 <h5 className="text-center mt-2">or</h5>
                                 <button className="btn mt-2 border-0"><i class="fa-solid fa-qrcode"></i> Login with QR code</button>
                                 <div className="text-start">
                                 <p className="mt-3">By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
                                 </div>
                        </div>
                    </div>

            </div>
             
        </>
    )
}

export default SignUp;