import React from "react";
import Navbar from './Navbar';
import Body from './Body';
import SignUp from './Signup';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Ride from './Ride';
import SignupContinue from './SignupContinue';
import Login from './Login';
import { auth } from "./Fire";




const Direct = ({presentUser}) => {
    return(
        <> 
          <div>
          <Router>
          <Navbar/>
          
            <Routes>
              <Route path='/SignUp' element={<SignUp/>} />
              <Route path='/SignupContinue' element={<SignupContinue/>} />
              <Route path='/' element={<Body/>} />
              <Route path='/Login' element={<Login/>} />
              <Route path='/' element={<Body/>} />
              <Route path='/Ride' element={<Ride/>} />
            </Routes>
          </Router>
          </div>
        </>
    )
}

export default Direct