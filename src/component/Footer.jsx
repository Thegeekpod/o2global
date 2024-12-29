import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="footer_div_1">
                                <a href="index.php"><img src="images/logo2.jpg" alt="Logo" className="footer_logo" /></a>

                                <p className="footer_p_1 footer-boder">We offer products to enhance lives and help start your own
                                    business. Come join us to turn your dreams into reality.</p>



                                <ul className="team-social footer-social">
                                    <li className="share-icon">
                                        <a href="https://www.facebook.com/o2Globalnow" target="_blank">
                                            <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="share-icon">
                                        <a href="#">

                                            <b>x</b>
                                        </a>
                                    </li>
                                    <li className="share-icon">
                                        <a href="https://www.instagram.com/o2globalnow" target="_blank">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="footer_usa_li share-icon">
                                        <img src="https://inextwebs.com/o2globaltravel/public/frontend/images/nkimg/Flag_of_the_United_States.png" alt="Logo" className="footer_logo1" />
                                    </li>
                                </ul>
                                <div className="footer-logo-icon ">
                                    <ul className="footer-logo-icon-ul">
                                        <li className="footer-logo-icon-li">
                                            <a href="#" className="footer-logo-icon-a">
                                                <img src="https://inextwebs.com/o2globaltravel/public/frontend/images/nkimg/visa.png" className="footer-logo-icon-img" />
                                            </a>
                                        </li>
                                        <li className="footer-logo-icon-li">
                                            <a href="#" className="footer-logo-icon-a">
                                                <img src="https://inextwebs.com/o2globaltravel/public/frontend/images/nkimg/business.png" className="footer-logo-icon-img" />
                                            </a>
                                        </li>
                                        <li className="footer-logo-icon-li">
                                            <a href="#" className="footer-logo-icon-a">
                                                <img src="https://inextwebs.com/o2globaltravel/public/frontend/images/nkimg/discover.png" className="footer-logo-icon-img" />
                                            </a>
                                        </li>
                                        <li className="footer-logo-icon-li">
                                            <a href="#" className="footer-logo-icon-a">
                                                <img src="https://inextwebs.com/o2globaltravel/public/frontend/images/nkimg/american-express.png" className="footer-logo-icon-img" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-1"></div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-6">
                            <div className="footer-widget">
                                <h5>Quick links</h5>
                                <ul>
                                    <li className="active">
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/membership">Membership</a>
                                    </li>
                                    <li>
                                        <a href="/opportunity">Opportunity</a>
                                    </li>
                                    <li>
                                        <a href="/training">Training</a>
                                    </li>
                                    <li>
                                        <a href="/about-us">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/events">Events</a>
                                    </li>
                                    <li>
                                        <a href="/contact-us">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-6">
                            <div className="footer-widget">
                                <h5>Other links</h5>
                                <ul>

                                    <li className="manage_padding">
                                        <Link to="/terms-and-conditions">Terms & Conditions</Link>
                                    </li>
                                    <li className="manage_padding">
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li className="manage_padding">
                                        <a href="https://97702a.myshopify.com/password">O2 Global Gear</a>
                                    </li>
                                    <li className="manage_padding">
                                        <a href="#">Our Blogs</a>
                                    </li>
                                    <li className="manage_padding">
                                        <a href="https://o2ix.com/customer">Join Now</a>
                                    </li>
                                    <li className="manage_padding">
                                        <a href="https://o2ix.com/customer">Log In</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="text-center">
                            <div className="copyright">
                                <p className="copyright footer_p_4 mb-0">Copyright © 2024. All rights reserved </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

