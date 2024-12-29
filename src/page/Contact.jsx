import React from 'react'

const Contact = () => {
  return (
    <>
    <div
      className="header_absolute cover-background ds s-overlay s-parallax"
      style={{ backgroundPosition: "50% -3px" }}
    >
      <section className="page_title ds s-py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="bold">Contact Us</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://inextwebs.com/o2globaltravel/public">Home</a>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section className="ls contact py-5 mt-5 bg-graphic">
      <div className="container">
        <div className="row mt--5">
          <div
            data-animation="scaleAppear"
            className="col-lg-6 animate animated scaleAppear"
          >
            <h4 className="text-left mb-20">Get In Touch</h4>
            <div className="divider-30 hidden-below-lg" />
            <p>
              Thank you for visiting o2 Global. Your questions, comments, and
              feedback are important to us.
            </p>
            <ul className="list-unstyled">
              <li>
                <div className="media">
                  <span className="icon-styled ">
                    <i className="fa color-main2 fa-phone" />
                  </span>
                  <div className="media-body">
                    <span className="small-text">Phone number</span>
                    <p>
                      <a href="tel:18004853559 ">+1-800-485-3559 </a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <span className="icon-styled ">
                    <i className="fa color-main2 fa-map-marker" />
                  </span>
                  <div className="media-body">
                    <span className="small-text">our ADDRESS</span>
                    <p style={{ color: "#000" }}>
                      871 Coronado Center Dr, Henderson, NV 89052
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <span className="icon-styled ">
                    <i className="fa color-main2 fa-pencil" />
                  </span>
                  <div className="media-body">
                    <span className="small-text">EMAIL address</span>
                    <p>
                      <a href="mailto:support@o2global.com">
                        Support@o2global.com
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="divider-20 hidden-above-lg" />
          <div
            data-animation="scaleAppear"
            className="col-lg-6 animate animated scaleAppear"
          >
            <h4 className="text-left mb-35">Contact Form</h4>
            <form
              className=" c-mb-20 c-gutter-20"
              method="post"
              action="https://inextwebs.com/o2globaltravel/public/submit-contact-form"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="fJIeFLhcRBDnB2ETwIejlVl1wlpbLAoz0nOSuIMw"
              />{" "}
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group has-placeholder">
                    <label htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      aria-required="true"
                      size={30}
                      defaultValue=""
                      name="fname"
                      id="name"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group has-placeholder">
                    <label htmlFor="phone">
                      Phone<span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      aria-required="true"
                      size={30}
                      defaultValue=""
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group has-placeholder">
                    <label htmlFor="email">
                      Email address<span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      aria-required="true"
                      size={30}
                      defaultValue=""
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group has-placeholder">
                    <label htmlFor="subject">
                      Subject<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      aria-required="true"
                      size={30}
                      defaultValue=""
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mb-0">
                  <div className="form-group has-placeholder">
                    <label htmlFor="message">Message</label>
                    <textarea
                      aria-required="true"
                      rows={3}
                      cols={45}
                      name="message"
                      id="message"
                      className="form-control"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-30">
                <div className="col-sm-12 text-left">
                  <div className="form-group">
                    <div className="button">
                      <button type="submit" name="submit" className="form_submit">
                        <ul>
                          <li className="button-li">
                            <a>
                              {" "}
                              Submit
                              <span />
                              <span />
                              <span />
                              <span />
                              <i className="fa fa-arrow-right" />
                            </a>
                          </li>
                        </ul>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Contact