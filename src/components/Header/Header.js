import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header id="header_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <a href="/" className="logo"><img src="https://creativeitinstitute.com/front/images/footer-logo.png"  alt=""/></a>
                        </div>
                        <div className="col-lg-10">
                            <div className="main_menu">
                                <div className="text-end">
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/disclaimer">Disclaimer</Link>
                                    <Link to="/credits">Credits</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
