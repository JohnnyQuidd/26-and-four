import React from 'react';

import logoWhite from '../images/logo-white.svg';

function FooterComponent () {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="container">
                        <a href="/#">
                             <img src={logoWhite} className="logo" alt="logo" /> 
                        </a>
                        <p className="address"> Novi Sad, 21000 <br/> Serbia </p>
                        <ul className="footer-links">
                            <li><a href="/#">Terms of Service</a></li>
                            <li><a href="/#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterComponent;