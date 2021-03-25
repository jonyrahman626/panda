import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer id="footer_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <div className="footer_text">
                                <h2>Contact Us</h2>
                                <a href="mailto: Jony.cit.bd@gmail.com">Jony.cit.bd@gmail.com</a>
                                <a href="callto: 01681470626">01681470626</a>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="/">Facebook</a></li>
                                        <li><a href="/">Twitter</a></li>
                                        <li><a href="/">Linkedin</a></li>
                                        <li><a href="/">Pinterest</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer_form">
                                <form action="">
                                    <input type="text" placeholder="Enter Your Name"/>
                                    <input type="text" placeholder="Enter Your Email"/>
                                    <textarea placeholder="Message"></textarea>
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy_right">
                    <p>Copyright &copy; 2021 Jony Rahman</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
