import React from 'react'
import Banner from '../component/home/Banner'
import SocialWall from '../component/home/SocialWall'

const Home = () => {
  return (
    <>
 <Banner/>

			<section>
				<div className="sndsection_div_1 mt-5 mb-5">
					<img src="images/nkimg/Opportunity.jpeg" className="sndsection_img_1"/>
				</div>
			</section>

			<section className="bg-graphic">
				<div className="whoweare_div_3 mb-5">
					<div className="container">
						<div className="whoweare_div_1">
							<div className="row align-items-center">
								<div className="col-lg-7 col-md-7 col-12">
									<div className="whoweare_div_2">
										<p className="whoweare_p_1">
											Who We Are
										</p>
										<p className="whoweare_p_2">
											O2 Global is a lifestyle company dedicated to offering hope and opportunities to underserved individuals and those seeking a change. Leveraging the power of the Internet and the effectiveness of word-of-mouth social sharing, O2 Global is becoming a leader in the social marketing industry. Based in Henderson, Nevada, O2 Global is a privately held company with active representatives and members both in the United States and internationally, including affiliated companies and subsidiaries.
										</p>
									</div>
								</div>
								<div className="col-lg-5 col-md-5 col-12">
									<div className="whoweare_div_2">
										<img className="tilt-img" src="images/nkimg/who-we-are.jpeg" alt="brand-side-image"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-graphic">
				<div className="experience_div_2 pt-5 pb-5 mb-5">
					<div className="container">
						<div className="experience_div_1 text-center">
							<p className="experience_p_1">
								Experience unparalleled excellence with the industry's finest training seminars
							</p>
							<img src="images/nkimg/who-we-are2.jpeg" className="whoweare_img_1 mt-3"/>
							<p className="experience_p_2 mt-4">
								O2 Global, partnered with Envision Success Seminars, brings a level of training proven to be light years ahead of any other program in the industry. Our powerful training curriculum is based on the principle that the greatest reason for success is simply following a proven path with correct knowledge and information.
							</p>
							<div className="experience_div_3">
								<div className="button stay_button email_btn_1">
									<ul>
										<li className="button-li">
											<a href="training.php"> Discover more
												<span></span><span></span><span></span><span></span>
												<i className="fa fa-arrow-right"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="section-spacing reviews inverse-bg bg-graphic mb-2 ">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="reviews-left">
								<img className="tilt-img" src="images/time.jpg" alt="brand-side-image"/>
							</div>
						</div>
						<div className="col-lg-7  text-lg-center text-md-left">
							<div className="section-title mb-4">
								<img src="images/logo1.png" alt="Logo" className="logo_2_brand"/>
							</div>
							<p className="mb-2 text-black"><b>Join Us at O2 Global!</b></p>
							<p className="mb-2 text-black">
								At O2 Global, we aim to make life enjoyable and rewarding for driven individuals. Our mission is to offer hardworking people the opportunity to join our unmatched global affiliate network, featuring a lucrative compensation plan and generous rewards. By fostering strong relationships with members, vendors, and partners worldwide, we provide the latest products, services, and training to ensure your success.
							</p>
						</div>
					</div>
				</div>
			</section>
			
			<section
				className="page_footer ds s-overlay s-parallax s-pt-80 s-pb-30 s-pb-md-50 s-pt-md-100 s-pt-lg-100 s-pb-xl-70 c-mb-20 c-gutter-60 membership_area email_div_2">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-lg-4 col-md-4 col-4"></div>
						<div className="col-lg-8 col-md-8 col-8">
							<div className="heading-div-email">
								<h3 className="section-heading" style={{color: 'black'}}>Stay Connected </h3>
							</div>
							<div className="form-div text-center">
								<form action="">
									<div className="text-center">
										<div className="email_div_1">
											<input type="email" id="email" name="email" placeholder="Email" className="email-input email_input_1"/>
										</div>
										<div className="button stay_button email_btn_1">
											<ul>
												<li className="button-li">
													<a href="javascript:void(0)" className="discover_btn_1"> Submit
														<span></span><span></span><span></span><span></span>
														<i className="fa fa-arrow-right"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
          </div>
			</section>

			<section className="bg-graphic">
				<div className="socialmedia_div_1 mt-5 mb-5">
					<div className="container-fluid mb-5">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="socialmedia_div_3 text-left">
									<p className="socialmedia_p_1">Explore our social media</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12">
								<div className="socialmedia_div_4 text-right">
									<ul className="socialmedia_ul_1">
										<li className="socialmedia_li_1">
											<a href="https://www.facebook.com/o2Globalnow" target="_blank">
												<p className="socialmedia_p_2 facebook">
													<span className="socialmedia_span_1"><i className="fa fa-facebook" aria-hidden="true"></i></span>
													Follow us on Facebook
												</p>
											</a>
										</li>
										<li className="socialmedia_li_1">
											<a href="https://www.instagram.com/o2globalnow" target="_blank">
												<p className="socialmedia_p_2 instagram">
													<span className="socialmedia_span_1"><i className="fa fa-instagram" aria-hidden="true"></i></span>
													Follow us on Instragram
												</p>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div id="flockler-embed-18f7c1d448304f434cf2a3d87fef0a0a"></div>
<SocialWall/>
			            <div className="socialmedia_div_2 text-center mt-4">
			            	<div className="button stay_button socialmedia_btn_1">
								<ul>
									<li className="button-li">
										<a href="social-media.php"> View all &nbsp;
											<span></span><span></span><span></span><span></span>
											<i className="fa fa-arrow-right"></i>
										</a>
									</li>
								</ul>
							</div>
			            </div>
					</div>
					
				</div>
			</section>
    </>
  )
}

export default Home