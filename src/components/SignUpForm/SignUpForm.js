import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./components/config/config";
import "./SignUpForm.css"

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(user);
        } catch(error) {
            console.log(error.message);
        }
    };
    return (
        <div className="container">
            <form onSubmit={(event) => {
                    event.preventDefault();
                    setEmail('');
                    setPassword('');
                    }}>
                <label>Email</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <label>Password</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <button type="submit" onClick={register}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;