import React, { Component } from 'react';

import logo from '../images/logo.svg';
import ham from '../images/ham.svg';
import exit from '../images/exit.svg';
import server from '../images/server.svg';
import scroll from '../images/scroll.svg';


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfClass: "show-desktop hide-mobile"
        };
    }

    expandMenu() {
        this.setState({
            nameOfClass: "show-desktop"
        });
    }
    
    closeMenu() {
        this.setState({
            nameOfClass: "show-desktop hide-mobile"
        });
    }

    render(){
        return(
            <> 
            <div className="container">
                <header>
                    <img src={logo} alt="23 logo" className="logo" />
    
                    <nav>
                        <a href="/#" className="hide-desktop">
                            <img src={ham} alt="toggle menu" className="menu" id="menu" onClick={() => this.expandMenu()} />
                        </a>
    
                        <ul className={this.state.nameOfClass} id="nav">
                            <li id="exit" className="exit-btn hide-desktop">
                                <img src={exit} alt="exit menu" onClick={() => this.closeMenu()} />
                            </li>
                            <li><a href="/#">Home</a></li>
                            <li><a href="/#">Services</a></li>
                            <li><a href="/#">About</a></li>
                            <li><a href="/#">Contact</a></li>
                        </ul>
                    </nav>
                </header>
    
                <section>
                    <img src={server} alt="server graphic" className="server" />
                    
                    <h1>Web Hosting for the Modern Era</h1>
                    <p className="subhead">Go serverless and pay only for what you use.</p>
    
                    <img src={scroll} alt="scroll down" className="scroll hide-mobile show-desktop" />
                </section>
            </div>
        </>
        );
    }
}

export default Hero;