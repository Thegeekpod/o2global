import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-4">
                    <div className="footer_div_1">
                        <a href="index.php"><img src="images/logo2.jpg" alt="Logo" className="footer_logo"/></a>
                        
                        <p className="footer_p_1">We offer products to enhance lives and help start your own
                            business. Come join us to turn your dreams into reality.</p>
                        <ul className="team-social footer-social">
                            <li className="share-icon">
                                <a href="https://www.facebook.com/o2Globalnow" target="_blank">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="share-icon">
                                <a href="javascript:void(0)">
                                   
                                    <b>x</b>
                                </a>
                            </li>
                            <li className="share-icon">
                                <a href="https://www.instagram.com/o2globalnow" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-1"></div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-6">
                    <div className="footer-widget">
                        <h5>Quick links</h5>
                        <ul>
                        <li className="active">
                                <a href="index.php">Home</a>

                            </li>
                        
                            <li>
                                <a href="membership.php">Membership</a>
                            </li>
                            <li>
                                <a href="opportunity.php">Opportunity</a>
                            </li>
                            <li>
                                <a href="training.php">Training</a>
                            </li>
                                <li>
                                <a href="about-us.php">About Us</a>
                            </li>
                            <li>
                                <a href="events.php">Events</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-6">
                    <div className="footer-widget">
                        <h5>Other links</h5>
                        <ul>
                        
                            <li>
                                <a href="javascript:void(0)">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://97702a.myshopify.com/password">O2 Global Gear</a>
                            </li>
                            
                            <li>
                                <a href="https://o2ix.com/customer">Join Now</a>
                            </li>
                            <li>
                                <a href="https://o2ix.com/customer">Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="text-center">
                    <div className="copyright">
                        <p className="copyright footer_p_4 mb-0">Copyright © 2024. All rights reserved | Designed
                            &amp; Developed by <a href="https://www.iwebnext.com/" style={{color: 'white'}}
                                target="_blank">Iwebnext</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer