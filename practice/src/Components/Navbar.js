import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./Fire";

const Navbar = () => {

    return(
        <>
            <div className="container-fluid bg-dark">
              <div className="container">
                 <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-light">
                      <div class="container-fluid">
                        <Link to='/' class="navbar-brand text-white fs-3" href="#">Uber</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class=""><button className="btn btn-light">Sign Up</button></span>
                        </button>
                        <div class="collapse navbar-collapse navbar_first" id="navbarNav">
                         <div>    
                            <ul class="navbar-nav">
                              <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Ride</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Drive</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Business</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">About <i class="fa-solid fa-angle-down"></i></a>
                              </li>
                            </ul>
                         </div>
    
                         <div>
                            <ul class="navbar-nav">
                              <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#"><i class="fa-solid fa-globe"></i>&nbsp; EN</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Help</a>
                              </li>
                              <li class="nav-item">
                                <Link class="nav-link" to='/Login'>Login</Link>
                              </li>
                              <li class="nav-item">
                                <Link to='/SignUp'> <button className="btn btn-light">Sign Up</button> </Link>
                              </li>&nbsp; &nbsp;
                              <buuton className='btn btn-primary' onClick={()=> auth.signOut()}>SignOut</buuton>
                            </ul>
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

export default Navbar;