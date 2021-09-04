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
				<button className="loginScreen-button">
					Sign In 
				</button>
            </div>
        </div>
    );
}

export default LoginScreen;
