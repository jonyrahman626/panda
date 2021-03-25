import React, { Component } from 'react';
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
                        <div className="col-lg-6">
                            <div className="main_menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/disclaimer">Disclaimer</a></li>
                                    <li><a href="/credits">Credits</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header_search">
                                <form action="">
                                    <input type="text" placeholder="Search Here"/>
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
