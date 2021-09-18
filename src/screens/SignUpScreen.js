import React from "react";
import "./SignUpScreen.css";

const SignUpScreen = () => {
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input className='signin' type='email' placeholder='Email' />
                <input
                    className='signin'
                    type='password'
                    placeholder='Password'
                />
                <button className='signin' type='submit'>
                    Sign In
                </button>
            </form>
            <h4>
                <span className="signup-new">New to Netflix ? </span>
                <span className='signup-link'>Sign up now.</span>
            </h4>
        </div>
    );
};

export default SignUpScreen;
