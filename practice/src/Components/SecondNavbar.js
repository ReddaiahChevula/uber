import React, { useState } from "react";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";



const SecondNavbar = () => {
        const[isDown,setIsDown] = useState(true);
        const handleToggle = ()=> {
            setIsDown(!isDown);
        }
    return(
        <>
          
          <div className="container-fluid bg-light">
             <div className="container">
                 <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid second_navbar" >
                          <a class="navbar-brand anchor" href="#">Navbar</a>
                          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> */}
                            <span class="navbar-toggler border-0" onClick={handleToggle} data-bs-toggle="collapse"  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><a class="navbar-brand"  href="#">Ride  {isDown ? <FaAngleDown/>:<FaAngleUp/>} </a></span>
                          {/* </button> */} 
                          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ms-auto">
                              <a class="nav-link " aria-current="page" href="#">Request a ride</a>
                              <a class="nav-link" href="#">Reserve a ride</a>
                              <a class="nav-link" href="#">See prices</a>
                              <a class="nav-link" href="#" >Explore ride options</a>
                            </div>
                          </div>
                        </div>
                    </nav>
                 </div>
             </div>
          </div>

        </>
    )
}

export default SecondNavbar;