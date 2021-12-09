import React, { useState } from 'react'
import './navbar.css';

export default function Navbar() {
    const logo = "./containers/juliabild.png";
    const [toggleMeny, setToggleMeny] = useState(false);
    return (
        <>
            <div className="navbar__container">
                <div>
                    <img src="./containers/juliabild.png" alt="" className="img1" />
                </div>
                <div className="navbar__container-links">
                    <p><a href="#home"></a>home</p>
                    <p><a href="#cta"></a>event</p>
                    <p><a href="#gallery"></a>galleri</p>
                    <p><a href="#about"></a>om oss</p>
                    <p><a href="#contact"></a>kontakt</p>
                </div>
                <div className="navbar__container-shop-button">
                    <p>Buy Merch</p>
                    <button type="button">Shop</button>
                </div>
                <div className="meny">
                    {toggleMeny ? <i onClick={() => setToggleMeny(false)}>TryckFörHej</i> 
                    : <i onClick={() => setToggleMeny(true)}>Hej</i>
                    }
                    {toggleMeny && (
                        <p>länkar</p>
                    )}
                </div>
            </div>
        </>
    )
}
