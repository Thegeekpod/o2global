<?php

$current_page = basename($_SERVER['PHP_SELF']);
?>

<div class="header_absolute ds home">
				<!--topline section visible only on small screens|-->
				<section class="page_topline ds">
					<div class="container-fluid">
						<div class="row align-items-center">
							<div class="col-12 col-md-4 col-xl-4">
								<div class="media">
									<div class="media-body">
										<a href="index.php" class="logo">
											<img src="images/logo1-white.png" alt="img" class="nav-upper-header1">
										</a>
									</div>
								</div>
							</div>
							<!-- <div class="col-md-4 text-center hidden-below-md">
								
							</div>
							<div class="col-12 col-md-4 col-xl-4">
								<div class="media">
									

								</div>
							</div> -->
						</div>
					</div>
				</section>
				<!--eof topline-->
				<!-- header with two Bootstrap columns - left for logo and right for navigation and includes (search, social icons, additional links and buttons etc -->
				<header class="page_header ls justify-nav-center">
					<div class="container-fluid">
						<div class="row align-items-lg-end align-items-center">
							<div class="col-4 col-lg-3 col-md-4  d-flex">
								<a href="index.php" class="logo">
									<img src="images/logo2.jpg" alt="img" class="logo-color">
								</a>
							</div>

							<div class="col-lg-9 col-1">
								<!-- main nav start -->
								<!--<nav class="top-nav">-->
								<!--	<ul class="nav sf-menu text-left">-->
								<!--	   <li class="d-lg-none d-md-block">-->
								<!--	       	<a href="index.php" class="logo mobile_logo_2">-->
        <!--									<img src="images/logo1.png" alt="img" class="logo-color">-->
        <!--								</a>-->
								<!--        </li>-->
								<!--		<li class="active">-->
								<!--			<a href="index.php">Home</a>-->

								<!--		</li>-->
									
								<!--		<li>-->
								<!--			<a href="membership.php">Membership</a>-->
								<!--		</li>-->
								<!--		<li>-->
								<!--			<a href="opportunity.php">Opportunity</a>-->
								<!--		</li>-->
								<!--			<li>-->
								<!--			<a href="about-us.php">About Us</a>-->
								<!--		</li>-->
								<!--		<li>-->
								<!--			<a href="events.php">Events</a>-->
								<!--		</li>-->
								<!--		<li>-->
								<!--			<a href="join-now.php">Join Now</a>-->
								<!--		</li>-->
								<!--		<li>-->
								<!--			<a href="login.php">Log In</a>-->
								<!--		</li>-->
										
								<!--	</ul>-->


								<!--</nav>-->
								<!-- eof main nav -->
								
								<nav class="top-nav">
                                    <ul class="nav new-nav">
                                        <li <?php if ($current_page == 'index.php') echo 'class="active"'; ?>>
                                            <a href="index.php">Home</a>
                                        </li>
                                        <li <?php if ($current_page == 'membership.php') echo 'class="active"'; ?>>
                                            <a href="membership.php">Membership</a>
                                        </li>
                                        <li <?php if ($current_page == 'opportunity.php') echo 'class="active"'; ?>>
                                            <a href="opportunity.php">Opportunity</a>
                                        </li>
										<li <?php if ($current_page == 'training.php') echo 'class="active"'; ?> >
                                            <a href="training.php">Training</a>
                                        </li>
                                        <li <?php if ($current_page == 'events.php') echo 'class="active"'; ?>>
                                            <a href="events.php">Events</a>
                                        </li>
                                        <li class="new-nav-li">
                                            <a href="https://97702a.myshopify.com/password">O2 Global Gear</a>
                                        </li>
                                        <li <?php if ($current_page == 'about-us.php') echo 'class="active"'; ?>>
                                            <a href="about-us.php">About Us</a>
                                        </li>
                                        
                                        <li <?php if ($current_page == 'join-now.php') echo 'class="active"'; ?> >
                                            <a href="https://o2ix.com/customer">Join Now</a>
                                        </li>
                                        <li <?php if ($current_page == 'login.php') echo 'class="active"'; ?>>
                                            <a href="https://o2ix.com/customer">Log In</a>
                                        </li>
                                    </ul>
                                </nav>
							</div>

						</div>
					</div>
					<!-- header toggler -->
					<span class="toggle_menu"><span></span></span>
				</header>

			</div>