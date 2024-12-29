import React from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <>
    <div className="header_absolute cover-background ds s-overlay s-parallax">
      <section className="page_title ds s-py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="bold">Events</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Events</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/*<div class="divider-50 d-none visible-below-lg"></div>*/}
    <section>
      <div className="events_div_1 bg-graphic">
        <div className="container">
          <div className="events_div_2">
            <div className="events_div_3">
              <div className="col-12 text-center p-40">
                <h3 className="section-heading d-inline-block mb-2">
                  Join Our Events
                  {/* <span class="back">Join Our Events </span> */}
                </h3>
              </div>
            </div>
            <div className="events_div_4 mt-3">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="events_div_5">
                    <img src="/images/nkimg/event1.jpg" className="events_img_1" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="events_div_5">
                    <p className="events_p_1">
                      At O2 Global, we are committed to supporting our Affiliate
                      community by utilizing cutting-edge technology platforms,
                      however, while technology has significantly enhanced our
                      ability to network and promote our business, research
                      consistently demonstrates a continued need and desire for
                      direct human interaction. Therefore, we offer a variety of
                      live, in-person events designed to foster connection and
                      collaboration. Additionally, we provide opportunities for
                      you to host one of these educational and enjoyable events
                      within your own community, further enriching the collective
                      experience and strengthening our network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="events_div_6 bg-graphic py-5"
        style={{ backgroundImage: "url(/images/nkimg/event2.jpg)" }}
      >
        <div className="container">
          <div className="events_div_7">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <div className="events_div_8">
                  <p className="events_p_2">Live Training Calls</p>
                  <p className="events_p_3">
                    We offer Live Training Calls with distinguished leaders in our
                    industry, providing you with the opportunity to gain valuable
                    insights and expert advice on building and growing your
                    business.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <div className="events_div_8">
                  <p className="events_p_2">Live Company Overviews</p>
                  <p className="events_p_3">
                    We invite you to participate in our Live Company Overviews,
                    open to all interested individuals. These sessions provide a
                    comprehensive understanding of our company's operations,
                    products, and services. You'll discover how our offerings can
                    benefit you and your family, and explore how integrating our
                    solutions can enhance your lifestyle.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <div className="events_div_8">
                  <p className="events_p_2">Local Meetings</p>
                  <p className="events_p_3">
                    Weekly Local Meetings are hosted by experienced leaders within
                    your community. These gatherings provide a valuable
                    opportunity to network with fellow individuals pursuing
                    financial freedom and to introduce new referrals to our
                    thriving business community. By attending, you will gain
                    insights, share experiences, and build connections that can
                    support and enhance your journey towards financial
                    independence.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mb-3">
                <div className="events_div_8">
                  <p className="events_p_2">Regional Events</p>
                  <p className="events_p_3">
                    Monthly Regional Events are meticulously organized in various
                    regions across the country. These exclusive gatherings, hosted
                    by our esteemed elite leaders, present an unparalleled
                    opportunity to broaden your network beyond local boundaries
                    and forge connections with like-minded individuals from
                    diverse regions. Moreover, these events serve as invaluable
                    platforms for receiving top-tier training, empowering you to
                    cultivate momentum within your team and propel your business
                    to greater heights.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 col-12 mb-3 m-auto">
                <div className="events_div_8">
                  <p className="events_p_2">Annual Conferences</p>
                  <p className="events_p_3">
                    Annually, we present exclusive conferences hosted by the
                    executive staff of O2 Global, located in the vibrant city of
                    Las Vegas, NV, which also serves as our corporate
                    headquarters. These meticulously curated events blend business
                    with pleasure, offering attendees an immersive experience.
                    Throughout the days, participants engage in intensive training
                    sessions, valuable networking opportunities, and guided tours
                    of our state-of-the-art offices. As the sun sets, evenings
                    come alive with prestigious Awards banquets, exquisite
                    dinners, captivating shows, and lively parties. With its
                    unparalleled atmosphere of excitement and entertainment, Las
                    Vegas provides the perfect backdrop for merging work and play,
                    ensuring a memorable and productive conference experience for
                    all attendees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Events