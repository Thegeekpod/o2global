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
                                    <li className="breadcrumb-item active">Opportunity</li>
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
                                    style={{ textTransform: "uppercase" }}
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
                                            <h6 className="m-0">OWN YOUR SCHEDULE</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-usd" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0">MULTIPLE INCOME STREAMS</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-certificate" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0">REWARDS AND INCENTIVES</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-handshake-o" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0">LIFE EXPERIENCES®</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-0">
                                            <span className="align-self-start mr-3 media-icon">
                                                <i className="fa fa-user" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="m-0">PERSONAL GROWTH</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="button">
                                    <ul>
                                        <li className="button-li" onClick={handleClick}>
                                            <Link onClick={handleClick}
                                                to="#"
                                                style={{ textTransform: "uppercase" }}
                                            >
                                                {" "}
                                                Join Now
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
                            <p className="top-subtitle">Unbeatable Value</p>
                            <h3 className="section-heading d-inline-block">
                                Here’s How It Works<span className="back">join us</span>
                            </h3>
                            {/* <div class="mt-15"></div> */}
                        </div>
                        <div className="col-12">
                            <div className="row c-gutter-60">
                                <div className="col-md-12 mb-45 col-lg-5">
                                    <div className="vertical-item gallery-title text-center ">
                                        <div className="price">
                                            <span>from 250</span>
                                        </div>
                                        <div className="item-media mb-4 ">
                                            <img
                                                src="/images/routs/03.jpg"
                                                alt="img"
                                                className="how-works-img"
                                            />
                                            {/* <img src="/images/membership-big.jpg" alt="img"> */}
                                        </div>
                                        <div className="item-media">
                                            {/* <img src="/images/routs/03.jpg" alt="img" class="how-works-img"> */}
                                            <img src="/images/membership-big.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-7">
                                    <div className="mt--25" />
                                    <blockquote className="special-quote">
                                        <h4>Share &amp; Earn</h4>
                                        <p>
                                            Become an entrepreneur and share the joy of traveling more,
                                            for less. Just as Netflix revolutionized how we watch movies
                                            and Spotify transformed our music experience,02 Global is
                                            redefining how people travel!
                                        </p>
                                        <p className=" color-main3 text-left">
                                            Share The Membership And You Can Earn:
                                        </p>
                                        <ul className="list-styled text-left">
                                            <li>Daily Customer Bonuses</li>
                                            <li>Monthly Residual Bonuses</li>
                                        </ul>
                                    </blockquote>
                                    <blockquote className="special-quote">
                                        <h4>Build A Legacy</h4>
                                        <p>
                                            Share and leverage our business opportunity to create a
                                            passive income for you and your family. Work with other
                                            like-minded people to take advantage of the new era of travel
                                            and work-from-home movement!
                                        </p>
                                        <p className=" color-main3 text-left">
                                            Share The Opportunity And You Can Earn:
                                        </p>
                                        <ul className="list-styled text-left">
                                            <li>Daily Builder Bonuses</li>
                                            <li>Dual Team Residuals</li>
                                            <li>The Potential For Financial Freedom</li>
                                            <li>Car Bonus</li>
                                            <li>Presidential Bonus</li>
                                        </ul>
                                    </blockquote>
                                    <blockquote className="special-quote">
                                        <h4>Enjoy The Lifestyle Of Your Dreams</h4>
                                        <p>
                                            We understand the importance of recognizing our ambassadors
                                            along their business journey.
                                        </p>
                                        <p className=" color-main3 text-left">
                                            With 02 Global, You Could Be Eligible For Rewards Like:
                                        </p>
                                        <ul className="list-styled text-left">
                                            <li>VIP Treatment at Corporate Events</li>
                                            <li>Presidential Club Member Recognition</li>
                                            <li>Diamond Club Member Recognition</li>
                                            <li>Once-in-a-lifetime Incentive Trips</li>
                                            <li>
                                                100K, 250K, 500K, and 1 Million Dollar Earner Specialized
                                                Recognition Pieces
                                            </li>
                                        </ul>
                                        <div
                                            className="button"
                                            data-toggle="modal"
                                            data-target="#exampleModalCenter"
                                        >
                                            <ul>
                                                <li className="button-li" onClick={handleClick}>
                                                    <Link to="#">
                                                        {" "}
                                                        Join Now
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== how it work area =============		 */}
            <section
                id="services"
                className="ls   bg-graphic p-40 service-section benefits_area mb-5 mb-md-0"
            >
                <div className="divider-80 d-none d-xl-block" />
                <div className="divider-60 d-none visible-below-lg" />
                <div className="image_cover" />
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <div className="col-12 col-lg-7 col-xl-6 ">
                            <p className="top-subtitle">Benefits</p>
                            <h3 className="section-heading">
                                Our Benefits <span className="back">we do</span>
                            </h3>
                            <p>
                                Discover the world of exclusive benefits and discounts by joining O2
                                Global's premium travel community. Elevate your travel experiences
                                with us – become a member today.
                            </p>
                            <div className="divider-40" />
                            <div className="row c-mb-30 c-mb-xl-50 mb-4 mb-lg-0">
                                <div className="col-lg-6">
                                    <div className="media">
                                        <div className="icon-styled color-main">
                                            <img src="/images/events/membership1.png" alt="icon" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="text-normal">DIAMOND CLUB</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="media">
                                        <div className="icon-styled color-main">
                                            <img src="/images/events/membership1.png" alt="icon" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="text-normal">PRESIDENTIAL CLUB</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="media">
                                        <div className="icon-styled color-main">
                                            <img src="/images/events/membership1.png" alt="icon" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="text-normal">AWARDS AND DINNERS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="media">
                                        <div className="icon-styled color-main">
                                            <img src="/images/events/membership1.png" alt="icon" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="text-normal">02 Global EXPERIENCES®</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt--50 d-none d-xl-block" />
                            <div className="mt--30 d-xl-nonek" />
                        </div>
                        <div className="divider-60 d-none d-xl-block" />
                    </div>
                </div>
            </section>
            <section className="ls p-40 compensation_plan_area bg-graphic">
                <div className="container">
                    <div className="row c-gutter-60">
                        <main className="col-lg-12 col-xl-12">
                            <article
                                className="cover-image ds s-overlay post type-post status-publish format-quote has-post-thumbnail"
                                style={{ backgroundImage: 'url("/images/events/12_small.jpg")' }}
                            >
                                <a href="javascript:void()" data-gal="" />
                                <div className="post-thumbnail">
                                    <a href="javascript:void()" data-gal="">
                                        <img src="/images/widgets/03.jpg" alt="img" />
                                    </a>
                                </div>
                                <div className="entry-content">
                                    <blockquote>
                                        <h4 className="mb-4">Join Thousands From Around The World</h4>
                                        <p>And start living the life of your dreams.</p>
                                        <div
                                            className="button"
                                            data-toggle="modal"
                                            data-target="#exampleModalCenter"
                                        >
                                            <ul>
                                                <li className="button-li" onClick={handleClick}>
                                                    <Link href="#">
                                                        {" "}
                                                        Join Now
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <i className="fa fa-arrow-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <button className="btn_3">Compensation Plan Details</button>
                                        {/* <h4>Elmer Morrison</h4>
                                  <p class="small-text color-main">
                                      manager
                                  </p> */}
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