import React from 'react';

import user1 from '../images/user1.png';
import user2 from '../images/user2.png';

function GrayComponent() {
    return(
        <>
            <div className="gray-container">
                <div className="container">
                    <ul>
                        <li>
                            <figure>
                                <img src={user1} alt="User testimonial" />
                                <blockquote>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas tenetur totam, dolore</blockquote>
                                <figcaption>- Jane Doe</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={user2} alt="User testimonial" />
                                <blockquote>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas tenetur totam, dolore</blockquote>
                                <figcaption>- John Doe</figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container">
                <h2>Start your free trial now!</h2>
                <a href="/#" className="cta">Get Started</a>
            </div>
        </>
    );
}

export default GrayComponent;