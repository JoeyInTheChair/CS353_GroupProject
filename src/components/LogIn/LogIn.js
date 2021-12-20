import React, { useState } from "react";
import { Link } from "react-router-dom";
import {auth} from "../../config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,} from "firebase/auth";

import "./LogIn.css";


function LogIn(){
    const [registerEmail,setRegisterEmail]=useState("");
    const [registerPassword,setRegisterPassword]=useState("");
    const [loginEmail,setLoginEmail]=useState("");
    const [loginPassword,setLoginPassword]=useState("");
    const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
});

const register = async () => {
    try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        console.log(user);
    }catch(error){
        console.log(error.message);
    }
};





    const login = async()=>{
        try {
            const user = await signInWithEmailAndPassword( auth, loginEmail, loginPassword);
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
        
    }
    
    

    return (

<body>
<h7> User Logged In: </h7>
      {user?.email}
        <div className="LoginIn">
            <h1>Login / Signup</h1>
            <div >
            <h3>
                <input type="email" class="back" placeholder="Email "name="" id="email" required
                onChange={(event)=>{
                    setRegisterEmail(event.target.value);
                    setLoginEmail(event.target.value);
                }}
                />
                </h3>
                <h3>
                    <input type="password" class="back" placeholder="Password" name="" id="pass" required
                    onChange={(event)=>{
                        setLoginPassword(event.target.value);
                        setRegisterPassword(event.target.value);
                    }}
                    
                    />
                    </h3>
                <h3><button onClick={register} class="button1">Sign Up</button></h3>
                <h3>  <Link to="/diet-form">     <button onClick={login} class="button2">Login</button></Link></h3>
            </div>
            
        </div>
        </body>
    
        )
    }
    export default LogIn;