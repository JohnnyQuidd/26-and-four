import React from 'react';

import icon1 from '../images/icon-1.svg';
import icon2 from '../images/icon-2.svg';
import icon3 from '../images/icon-3.svg';


function BlueComponent() {
    return(
        <>
            <div className="blue-container">
                <div className="container">
                    <ul>
                        <li>
                            <img src={icon1} alt="Calendar icon" />
                            <p>Lorem ipsum dolor sit amet, cosnsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                        </li>
                        <li>
                            <img src={icon2} alt="Calendar icon" />
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                        </li>
                        <li>
                            <img src={icon3} alt="Calendar icon" />
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BlueComponent;
