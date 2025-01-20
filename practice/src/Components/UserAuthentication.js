import React,{useState} from "react";
import { auth } from "./Fire";
// import {auth,do} from './firebase';

const UserAuth = () => {
    const[data,setData] = useState({
        email:'',
        password:''
    });
    const {email,password} = data;

    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    };

    const signUp = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((user) => {
          console.log('User signed up:', user);
          alert('Sign Up successfully');
        })
        .catch((err) => {
          console.error('Error signing up:', err);
          alert('Error signing up');
        });
    };

    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((user) => console.log(user))
        .catch((err) => console.log(err))
    };

    return(
        <>
          <div>
            <center>
                <div className="col-4 border border-secondary border-2 p-5 mt-5 rounded-4">
                  <form>
                    <h5 className="text-start fw-bold">User Credentials</h5>
                     <input type="text" className="form-control mt-3" placeholder="Enter Email" name="email" value={email} onChange={changeHandler} /> <br/>
                     <input type="password" className="form-control" placeholder="Enter Password" name="password" value={password} onChange={changeHandler} />
                     <div className="d-flex justify-content-around mt-3">
                     <button className="btn btn-success" onClick={signUp}>SignUp</button>
                     <button className="btn btn-primary" onClick={signIn}>SignIn</button>
                     </div>
                  </form>
                </div>
            </center>
          </div>
        </>
    )
}

export default UserAuth;