import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation();
  return (
    

    <div className="header_absolute ds home">
	<section className="page_topline ds">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-12 col-md-4 col-xl-4">
					<div className="media">
						<div className="media-body">
							<a to="/" className="logo">
								<img src="/images/logo1-white.png" alt="img" className="nav-upper-header1"/>
							</a>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
		<header className="page_header ls justify-nav-center">
		<div className="container-fluid">
			<div className="row align-items-lg-end align-items-center">
				<div className="col-4 col-lg-3 col-md-4  d-flex">
					<a to="/" className="logo">
						<img src="/images/logo2.jpg" alt="img" className="logo-color"/>
					</a>
				</div>

				<div className="col-lg-9 col-1">
				
					<nav className="top-nav">
						<ul className="nav new-nav">
							<li className={location.pathname === '/' ? 'active' : ''}>
								<Link to="/">Home</Link>
							</li>
							<li className={location.pathname === '/membership' ? 'active' : ''}>
								<NavLink to="/membership">Membership</NavLink>
							</li>
							<li >
								<a href="opportunity.php">Opportunity</a>
							</li>
							<li>
								<a href="training.php">Training</a>
							</li>
							<li >
								<a href="events.php">Events</a>
							</li>
							<li className="new-nav-li">
								<a href="https://97702a.myshopify.com/password">O2 Global Gear</a>
							</li>
							<li >
								<a href="about-us.php">About Us</a>
							</li>

							<li >
								<a href="https://o2ix.com/customer">Join Now</a>
							</li>
							<li>
								<a href="https://o2ix.com/customer">Log In</a>
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