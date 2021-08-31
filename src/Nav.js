import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(true);
    const navbarTransition = () => {
        if (window.scrollY > 100) {
            handleShow(false);
        } else {
            handleShow(true);
        }
    };
// navbar show/hide on scroll effect 
    useEffect(() => {
        window.addEventListener("scroll", navbarTransition);
        return () => {
            window.removeEventListener("scroll", navbarTransition);
        };
    },[]);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            {/* <h1>this is the nav</h1> */}
            <div className='nav-content'>
                <img
                    className='nav-logo'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='netflix logo'
                />

                <img
                    className='nav-avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='user avatar'
                />
            </div>
        </div>
    );
}

export default Nav;
