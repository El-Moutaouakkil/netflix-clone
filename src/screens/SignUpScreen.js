import React, { useRef } from "react";
import "./SignUpScreen.css";
import  auth from "../firebase"

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword();
    };

    const signIn = (e) => {
        e.preventDefault();
    };
    
    
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input
                    ref={emailRef}
                    className='signin'
                    type='email'
                    placeholder='Email'
                />
                <input
                    ref={passwordRef}
                    className='signin'
                    type='password'
                    placeholder='Password'
                />
                <button
                    onClick={signIn}
                    className='signin'
                    type='submit'>
                    Sign In
                </button>
            </form>
            <h4>
                <span className='signup-new'>New to Netflix ? </span>
                <span
                    onClick={register}
                    className='signup-link'>
                    Sign up now.
                </span>
            </h4>
        </div>
    );
};

export default SignUpScreen;
