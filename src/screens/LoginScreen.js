import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
    return (
        <div className='loginScreen'>
            <div className='loginScreen-background'>
                <img
                    className='loginScreen-logo'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='loginScreen logo'
                />
                <button className='loginScreen-button'>Sign In</button>
                <div className='loginScreen-body'>
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel any time.</h2>
                        <h3>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </h3>
                    </>
                <form className='login-subscription'>
                    <input type='email' name='email' id='email' className='subscription-email'/>
                    <button className='login-button'>Sign Up</button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
