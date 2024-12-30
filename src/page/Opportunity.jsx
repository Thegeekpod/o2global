import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Opportunity = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
      setShow((prevShow) => !prevShow); // Toggle the show state
    };

    return (
        <>
            <div className="header_absolute cover-background ds s-overlay s-parallax">
                <section className="page_title ds s-py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="bold">Opportunity</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> Opportunity</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="section-spacing features mt-5 bg-graphic">
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-md-6 col-lg-5 col-xl-4 col-sm-9">
                            <div className="about-us-left">
                                <h3 className="mt-n6 top-subtitle">Opportunity</h3>
                                <h5
                                    className="section-heading2"
                                >
                                    Live The Life Of Your Dreams By Becoming A Lifestyle Enterpreneur!
                                </h5>
                                <div className="about-info new-h6" data-cues="slideInLeft">
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-calendar-check-o" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0 opportunity_h_1">OWN YOUR SCHEDULE</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-usd" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0 opportunity_h_1">MULTIPLE INCOME STREAMS</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-certificate" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0 opportunity_h_1">REWARDS AND RECOGNITION</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-handshake-o" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0 opportunity_h_1">INCENTIVES TRIPS</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-user" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0 opportunity_h_1">PERSONAL GROWTH</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="button">
                                    <ul>
                                        <li className="button-li" onClick={handleClick}>
                                            <Link onClick={handleClick}
                                                to="#"
                                            >
                                                {" "}
                                                Join Now &nbsp;
                                                <span />
                                                <span />
                                                <span />
                                                <span />
                                                <i className="fa fa-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== how it work area =============		 */}
            <section
                className="ls routs bg-graphic how_work_area pt-5 pb-5"
                style={{ backgroundImage: "url(/images/nkimg/opportunity1.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center header_area">
                            <h4 className="d-inline-block opportunity_h_2">Make A Living While Making A Difference</h4>
                            <p className="opportunity_p_1 text-center">
                            Our business stands out because we prioritize your success and growth. We believe that by empowering our members, we create a ripple effect that positively impacts communities and changes lives. Here’s why our opportunity is the right choice for you
                            </p>
                        </div>
                        
                        <div className="opportunity_div_1 mt-4">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12 opportunity_div_2">
                                    <div className="opportunity_div_3 text-center">
                                        <p className="opportunity_p_2">
                                        Proven Success
                                        </p>
                                        <p className="opportunity_p_3">
                                        Our business model has a track record of success, with countless individuals achieving their financial and personal goals. We encourage all of our Affiliates to benefit from the wisdom and encouragement of our seasoned professionals.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 opportunity_div_2">
                                    <div className="opportunity_div_3 text-center">
                                        <p className="opportunity_p_2">
                                        Ethical and Transparent
                                        </p>
                                        <p className="opportunity_p_3">
                                        We pride ourselves on operating with integrity and transparency at the core of our business. Our commitment to ethical practices means you can feel good about the work you do and the impact you make. Join a company that prioritizes social responsibility and strives to create a positive change in the world.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 opportunity_div_2">
                                    <div className="opportunity_div_3 text-center">
                                        <p className="opportunity_p_2">
                                        Innovative Products 
                                        </p>
                                        <p className="opportunity_p_3">
                                        Our product lineup is designed to meet the needs of today&#039;s market, ensuring that you have a compelling offering to share with others
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== how it work area =============		 */}
            
            <section>
                <div className="opportunity_div_4 py-5 bg-graphic">
                    <div className="container"> 
                        <div className="opportunity_div_5">      
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="opportunity_div_6 text-center p-2">
                                        <img src="https://inextwebs.com/o2globaltravel/public/upload/opportunity/opportunityimage/444331718011657.jpg" className="opportunity_img_1 mb-4" />
                                        <p className="opportunity_p_5">Lucrative Earning Potential</p>
                                        <p className="opportunity_p_6">
                                        As a Lifestyle Entrepreneur, you need tools to maximize your productivity and reach your goals.Gain access to state-of-the-art marketing tools and resources. Our user-friendly platform makes it easy to share our opportunity, track your progress, and grow your business.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="opportunity_div_6 text-center p-2">
                                        <img src="https://inextwebs.com/o2globaltravel/public/upload/opportunity/opportunityimage/870951718011657.jpg" className="opportunity_img_1 mb-4" />
                                        <p className="opportunity_p_5"></p>
                                        <p className="opportunity_p_6">
                                        We offer a generous compensation plan that rewards your efforts and ambition. With multiple income streams and performance-based incentives, the sky&#039;s the limit on your earning potential. Our proven system ensures that your hard work pays off, giving you the financial freedom to live the lifestyle you desire.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="opportunity_div_6 text-center p-2">
                                        <img src="https://inextwebs.com/o2globaltravel/public/upload/opportunity/opportunityimage/153931718011657.jpg" className="opportunity_img_1 mb-4" />
                                        <p className="opportunity_p_5">Freedom To Design Your Life</p>
                                        <p className="opportunity_p_6">
                                        At our company, we understand that lifestyle entrepreneurs value the freedom to design their lives according to their own rules. Our business model offers unparalleled flexibility, allowing you to work from anywhere, set your own schedule, and create a work-life balance that suits you. Whether you&#039;re traveling the world or spending time with family, you have the autonomy to prioritize what matters most.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="opportunity_div_10 py-5 bg-graphic">
                    <div className="container">
                        <div className="opportunity_div_11">
                            <p className="opportunity_p_10 text-center">Get Customers And Get Customer Getters</p>
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4 col-12 mb-5">
                                    <div className="opportunity_div_12">
                                        <img src="https://inextwebs.com/o2globaltravel/public/upload/opportunity/opportunityimage/163371718015470.jpeg" className="opportunity_img_2" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="opportunity_div_12 mb-5">
                                        <p className="opportunity_p_11">
                                        Imagine exploring new destinations and enjoying luxurious travel experiences, all while earning a substantial income. At O2 Global, we invite you to work with like-minded individuals who seek to achieve their goals as a Lifestyle Entrepreneur. Everyone enjoys sharing their stories with friends, whether it&#039;s a new product they are using, a new service they’re happy with, or maybe a good movie they saw. Some may say, “I am not good at sales.” What we don’t realize is that “selling” is simply another word for “sharing”. With our simple business model, “Get Customers and Get Customer Getters,” even the most inexperienced entrepreneur can achieve success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-8 col-12 order-2 order-md-1">
                                    <div className="opportunity_div_12 mb-5">
                                        <p className="opportunity_p_12">
                                        Multiple Ways To Earn
                                        </p>
                                        <ul className="opportunity_ul_1">
                                            <li className="opportunity_li_1">
                                            Fast Start Bonuses
                                            </li>
                                            <li className="opportunity_li_1">
                                            Check Matching Program
                                            </li>
                                            <li className="opportunity_li_1">
                                            Daily Pay
                                            </li>
                                            <li className="opportunity_li_1">
                                            Rank Advancement Bonus
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 order-1 order-md-2">
                                    <div className="opportunity_div_12 mb-5">
                                        <img src="https://inextwebs.com/o2globaltravel/public/upload/opportunity/opportunityimage/814201718015470.jpg" className="opportunity_img_2" />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="opportunity_div_12">
                                        <img src="https://inextwebs.com/o2globaltravel/public/upload/opportunity/opportunityimage/890731718015470.jpg" className="opportunity_img_2" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="opportunity_div_12">
                                        <p className="opportunity_p_12">
                                        Clubs and Incentives
                                        </p>
                                        <p className="opportunity_p_11">
                                        We understand the importance of recognizing and rewarding our Affiliates. As you grow with O2 Global, you could be eligible for exclusive invitations and rewards:
                                        </p>
                                        <ul className="opportunity_ul_1">
                                            <li className="opportunity_li_1">
                                            Hi-5 Club
                                            </li>
                                            <li className="opportunity_li_1">
                                            Chairman Club
                                            </li>
                                            <li className="opportunity_li_1">
                                            Presidents Circle
                                            </li>
                                            <li className="opportunity_li_1">
                                            Rings
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ls p-40 compensation_plan_area bg-graphic">
                <div className="container">
                    <div className="row c-gutter-60">
                        <main className="col-lg-12 col-xl-12">
                            <article
                                className="cover-image ds s-overlay post type-post status-publish format-quote has-post-thumbnail"
                                style={{ backgroundImage: 'url("https://inextwebs.com/o2globaltravel/public/frontend/images/nkimg/kids.jpg")' }}
                            >
                                <a href="javascript:void()" data-gal="" />
                                <div className="post-thumbnail">
                                    <a href="javascript:void()" data-gal="">
                                        <img src="/images/widgets/03.jpg" alt="img" />
                                    </a>
                                </div>
                                <div className="entry-content">
                                    <blockquote>
                                        <h4 className="mb-4">Invest In Yourself</h4>
                                        <p>If you’re ready to enjoy a lifestyle filled with freedom, flexibility, and financial success, we invite you to join our company. Discover the difference that comes with being part of a forward-thinking, dynamic organization committed to your success.</p>
                                        <div
                                            className="button"
                                            data-toggle="modal"
                                            data-target="#exampleModalCenter"
                                        >
                                            <ul>
                                                <li className="button-li" onClick={handleClick}>
                                                    <Link href="#">
                                                        {" "}
                                                        Join Now &nbsp;
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <i className="fa fa-arrow-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </blockquote>
                                </div>
                                {/* .entry-content */}
                            </article>
                            <div></div>
                        </main>
                    </div>
                </div>
            </section>
            <div
  className={`modal fade membership_modal bg-graphic ${show ? 'show' : ''}`}
  id="exampleModalCenter"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        {/* <div class="modal-header"> */}
        <div className="close_btn_div">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="close_membership" onClick={handleClick}>
              ×
            </span>
          </button>
        </div>
        {/* </div> */}
        <div className="modal-body">
          <div className="modal-image_div">
            <div className="modal_image_div">
              <img
                src="/images/arrow.png"
                className="modal-img"
                alt="modal-img"
              />
            </div>
          </div>
          <p className="modal_p">
            Please Contact Your 02 Global Ambassador to Get Started
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

            
        </>

    )
}

export default Opportunity