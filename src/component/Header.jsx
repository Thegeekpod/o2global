import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import FetchLocationData from './FetchLocationData';
import GoogleTranslate from './GoogleTranslate';

const Header = () => {
	const location = useLocation();
	return (


		<div className="header_absolute ds home">
			<section className='top-bar'>
				<div className="row">
					<div className="col-6">
						<FetchLocationData/>
					</div>
					<div className="col-6 text-right">
						<GoogleTranslate/>
					</div>
				</div>
			</section>
			<section className="page_topline ds">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-12 col-md-4 col-xl-4 p-0">
							<div className="media">
								<div className="media-body">
									<Link to="/" className="logo">
										<img src="/images/logo1-white.png" alt="img" className="nav-upper-header1" />
									</Link>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			<header className="page_header ls justify-nav-center">
				<div className="container-fluid">
					<div className="row align-items-lg-end align-items-center">
						<div className="col-2 col-lg-2 col-md-2 p-0 d-flex">
							<Link to="/" className="logo main_logo_pd">
								<img src="/images/logo2.jpg" alt="img" className="logo-color" />
							</Link>
						</div>

						<div className="col-lg-10 col-1 p-0">

							<nav className="top-nav">
								<ul className="nav new-nav other_manu">
									<li className={location.pathname === '/' ? 'active' : ''}>
										<Link to="/">Home</Link>
									</li>
									<li className={location.pathname === '/membership' ? 'active' : ''}>
										<NavLink to="/membership">Membership</NavLink>
									</li>
									<li >
										<Link to="/opportunity">Opportunity</Link>
									</li>
									<li>
										<Link to="/training">Training</Link>
									</li>
									<li >
										<Link to="/events">Events</Link>
									</li>
									<li className="new-nav-li">
										<Link to="https://97702a.myshopify.com/password">O2 Global Gear</Link>
									</li>
									<li >
										<Link to="/about-us">About Us</Link>
									</li>

									{/* <li >
								<Link href="https://o2ix.com/customer">Join Now</Link>
							</li>
							<li>
								<Link href="https://o2ix.com/customer">Log In</Link>
							</li> */}
								</ul>
								<ul className="nav new-nav joinus_login">
									<li className="border_right">
										<Link to="https://o2ix.com/customer">Join Now</Link>
									</li>
									<li>
										<Link to="https://o2ix.com/customer">Login</Link>
									</li>
								</ul>
							</nav>
						</div>

					</div>
				</div>

				<span className="toggle_menu"><span></span></span>
			</header>

		</div>
	)
}

export default Header