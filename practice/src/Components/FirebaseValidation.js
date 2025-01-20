import React,{useState,useEffect} from "react";
import UserAuth from "./UserAuthentication";
import Direct from './Redirect';
import { auth } from "./Fire";



const FireValidation = () => {
    const[presentUser,setPresentUser] = useState(null);
    
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                setPresentUser({
                    uid:user.uid,
                    email:user.email
                })
            }
            else{
                setPresentUser(null)
            }
        })
    },[])

    return(
        <>
          <div>
            {presentUser ? <Direct presentUser={presentUser}/> : <UserAuth/>}
          </div>
        </>
    )
}

export default FireValidation;