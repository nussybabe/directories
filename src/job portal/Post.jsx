<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.themeregion.com/jobs/post.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 09 Sep 2024 08:15:09 GMT -->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Theme Region">
<meta name="description" content>
<title>Jobs | Job Portal / Job Board HTML Template</title>

<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/icofont.css">
<link rel="stylesheet" href="css/slidr.css">
<link rel="stylesheet" href="css/main.css">
<link id="preset" rel="stylesheet" href="css/presets/preset1.css">
<link rel="stylesheet" href="css/responsive.css">

<link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700,300" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Signika+Negative:400,300,600,700" rel="stylesheet" type="text/css">

<link rel="icon" href="images/ico/favicon.ico">
<link rel="apple-touch-icon" sizes="144x144" href="images/ico/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon" sizes="114x114" href="images/ico/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.html">
<link rel="apple-touch-icon" sizes="57x57" href="images/ico/apple-touch-icon-57-precomposed.png">



<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>

<header id="header" class="clearfix">

<nav class="navbar navbar-default navbar-expand-lg">
<div class="container">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"><i class="fa fa-align-justify"></i></span>
</button>
<a class="navbar-brand" href="index.html"><img class="img-fluid" src="images/logo.png" alt="Logo"></a>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="nav navbar-nav">
<li><a href="index.html">Home</a></li>
<li><a href="job-list.html">Job list</a></li>
<li><a href="details.html">Job Details</a></li>
<li><a href="resume.html">Resume</a></li>
<li class="dropdown active"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Pages<span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a href="profile.html">profile</a></li>
<li><a href="post-resume.html">Post Resume</a></li>
<li class="active"><a href="post.html">Job Post</a></li>
<li><a href="edit-resume.html">Edit Resume</a></li>
<li><a href="profile-details.html">profile Details</a></li>
<li><a href="bookmark.html">Bookmark</a></li>
<li><a href="applied-job.html">Applied Job</a></li>
<li><a href="delete-account.html">Close Account</a></li>
<li><a href="signup.html">Job Signup</a></li>
<li><a href="signin.html">Job Signin</a></li>
</ul>
</li>
</ul>
</div>

<div class="nav-right">
<ul class="sign-in">
<li><i class="fa fa-user"></i></li>
<li><a href="signin.html">Sign In</a></li>
<li><a href="signup.html">Register</a></li>
</ul>
<a href="post.html" class="btn">Post Your Job</a>
</div>

</div>
</nav>
</header>
<section class=" job-bg ad-details-page">
<div class="container">
<div class="breadcrumb-section">

<ol class="breadcrumb">
<li><a href="index.html">Home</a></li>
<li>Job Post </li>
</ol>
<h2 class="title">Post Your Job</h2>
</div>
<div class="job-postdetails">
<div class="row">
<div class="col-lg-8">
<form action="#">
<fieldset>
<div class="section postdetails">
<h4>Post Your Job<span class="pull-right">* Mandatory Fields</span></h4>
<div class="row form-group add-title">
<label class="col-sm-3 label-title">Job Category</label>
<div class="col-sm-9">
<div class="dropdown category-dropdown">
<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Select a category</span> <i class="fa fa-angle-down pull-right"></i></a>
<ul class="dropdown-menu category-change">
<li><a href="#">Select a category</a></li>
<li><a href="#">Software Engineer</a></li>
<li><a href="#">Program Development</a></li>
<li><a href="#">Project Manager</a></li>
<li><a href="#">Graphics Designer</a></li>
</ul>
</div>
</div>
</div>
<div class="row form-group">
<label class="col-sm-3">Job Type<span class="required">*</span></label>
<div class="col-sm-9 user-type">
<input type="radio" name="sellType" value="full-time" id="full-time"> <label for="full-time">Full Time</label>
<input type="radio" name="sellType" value="part-time" id="part-time"> <label for="part-time">Part Time</label>
<input type="radio" name="sellType" value="freelance" id="freelance"> <label for="freelance">Freelance</label>
<input type="radio" name="sellType" value="contract" id="contract"> <label for="contract">Contract</label>
</div>
</div>
<div class="row form-group">
<label class="col-sm-3 label-title">Title for your jonb<span class="required">*</span></label>
<div class="col-sm-9">
<input type="text" class="form-control" placeholder="ex, Human Resource Manager">
</div>
</div>
<div class="row form-group item-description">
<label class="col-sm-3 label-title">Description<span class="required">*</span></label>
<div class="col-sm-9">
<textarea class="form-control" id="textarea" placeholder="Write few lines about your jobs" rows="8"></textarea>
</div>
</div>
<div class="row characters">
<div class="col-sm-9 col-sm-offset-3">
<p>5000 characters left</p>
</div>
</div>
<div class="row form-group add-title location">
<label class="col-sm-3 label-title">Location<span class="required">*</span></label>
<div class="col-sm-9">
<div class="dropdown category-dropdown pull-left">
<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Country</span> <i class="fa fa-angle-down pull-right"></i></a>
<ul class="dropdown-menu category-change">
<li><a href="#">Argentina</a></li>
<li><a href="#">Australia</a></li>
<li><a href="#">Belgium</a></li>
<li><a href="#">Brazil</a></li>
<li><a href="#">Cambodia</a></li>
</ul>
</div>
<div class="dropdown category-dropdown pull-right">
<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">State</span> <i class="fa fa-angle-down pull-right"></i></a>
<ul class="dropdown-menu category-change">
<li><a href="#">State 1</a></li>
<li><a href="#">State 2</a></li>
<li><a href="#">State 3</a></li>
</ul>
</div>
</div>
</div>
<div class="row form-group select-price">
<label class="col-sm-3 label-title">Salary<span class="required">*</span></label>
<div class="col-sm-9">
<label>$USD</label>
<input type="text" class="form-control" placeholder="Min">
<span>-</span>
<input type="text" class="form-control" placeholder="Max">
<input type="radio" name="price" value="negotiable" id="negotiable">
<label for="negotiable">Negotiable </label>
</div>
</div>
<div class="row form-group add-title">
<label class="col-sm-3 label-title">Salary Type<span class="required">*</span></label>
<div class="col-sm-9">
<div class="dropdown category-dropdown">
<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Per Hour</span> <i class="fa fa-angle-down pull-right"></i></a>
<ul class="dropdown-menu category-change">
<li><a href="#">Per Hour</a></li>
<li><a href="#">Daily</a></li>
<li><a href="#">Monthly</a></li>
<li><a href="#">Yearly</a></li>
</ul>
</div>
</div>
</div>
<div class="row form-group add-title">
<label class="col-sm-3 label-title">Exprience<span class="required">*</span></label>
<div class="col-sm-9">
<div class="dropdown category-dropdown">
<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Mid Level</span> <i class="fa fa-angle-down pull-right"></i></a>
<ul class="dropdown-menu category-change">
<li><a href="#">Entry Level</a></li>
<li><a href="#">Mid Level</a></li>
<li><a href="#">Mid-Senior Level</a></li>
<li><a href="#">Top Level</a></li>
</ul>
</div>
</div>
</div>
<div class="row form-group brand-name">
<label class="col-sm-3 label-title">Job Function<span class="required">*</span></label>
<div class="col-sm-9">
<input type="text" class="form-control" placeholder="human, reosurce, job, hrm">
</div>
</div>
</div>
<div class="section company-information">
<h4>Company Information</h4>
<div class="row form-group">
<label class="col-sm-3 label-title">Industry<span class="required">*</span></label>
<div class="col-sm-9">
<input type="text" name="name" class="form-control" placeholder="Marketing and Advertising">
</div>
</div>
<div class="row form-group">
<label class="col-sm-3 label-title">Company Name<span class="required">*</span></label>
<div class="col-sm-9">
<input type="text" name="name" class="form-control" placeholder="ex, Jhon Doe">
</div>
</div>
<div class="row form-group">
<label class="col-sm-3 label-title">Email ID</label>
<div class="col-sm-9">
<input type="email" name="email" class="form-control" placeholder="ex, jhondoe@mail.com">
</div>
</div>
<div class="row form-group">
<label class="col-sm-3 label-title">Mobile Number<span class="required">*</span></label>
<div class="col-sm-9">
<input type="text" name="mobileNumber" class="form-control" placeholder="ex, +912457895">
</div>
</div>
<div class="row form-group address">
<label class="col-sm-3 label-title">Address<span class="required">*</span></label>
<div class="col-sm-9">
<input type="text" name="address" class="form-control" placeholder="ex, alekdera House, coprotec, usa">
</div>
</div>
</div>
<div class="section">
<h4>Make Your Post Premium</h4>
<p>More replies means more interested buyers. With lots of interested buyers, you have a better chance of selling for the price that you want.<a href="#">Learn more</a></p>
<ul class="premium-options">
<li class="premium">
<input type="radio" name="premiumOption" value="day-one" id="day-one">
<label for="day-one">Regular Post</label>
<span>$20.00</span>
</li>
<li class="premium">
<input type="radio" name="premiumOption" value="day-two" id="day-two">
<label for="day-two">Regular Post</label>
<span>$30.00</span>
</li>
<li class="premium">
<input type="radio" name="premiumOption" value="day-three" id="day-three">
<label for="day-three">Top Post for 7 days</label>
<span>$50.00</span>
</li>
<li class="premium">
<input type="radio" name="premiumOption" value="day-four" id="day-four">
<label for="day-four">Daily Bump Up for 7 days</label>
<span>$100.00</span>
</li>
</ul>
</div>
<div class="checkbox section agreement">
<label for="send">
<input type="checkbox" name="send" id="send">
You agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> and acknowledge that you are the rightful owner of this item and using Jobs to find a genuine buyer.
</label>
<button type="submit" class="btn btn-primary">Post Your Job</button>
</div>
</fieldset>
</form>
</div>

<div class="col-lg-4">
<div class="section quick-rules">
<h4>Quick rules</h4>
<p class="lead">Posting an ad on <a href="#">jobs.com</a> is free! However, all ads must follow our rules:</p>
<ul>
<li>Make sure you post in the correct category.</li>
<li>Do not post the same ad more than once or repost an ad within 48 hours.</li>
<li>Do not upload pictures with watermarks.</li>
<li>Do not post ads containing multiple items unless it's a package deal.</li>
<li>Do not put your email or phone numbers in the title or description.</li>
<li>Make sure you post in the correct category.</li>
<li>Do not post the same ad more than once or repost an ad within 48 hours.</li>
<li>Do not upload pictures with watermarks.</li>
<li>Do not post ads containing multiple items unless it's a package deal.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<footer id="footer" class="clearfix">

<section class="footer-top clearfix">
<div class="container">
<div class="row">

<div class="col-lg-3 col-sm-6">
<div class="footer-widget">
<h3>Quik Links</h3>
<ul>
<li><a href="#">About Us</a></li>
<li><a href="#">Contact Us</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">All Cities</a></li>
<li><a href="#">Help & Support</a></li>
<li><a href="#">Advertise With Us</a></li>
</ul>
</div>
</div>

<div class="col-lg-3 col-sm-6">
<div class="footer-widget">
<h3>How to sell fast</h3>
<ul>
<li><a href="#">How to sell fast</a></li>
<li><a href="#">Membership</a></li>
<li><a href="#">Banner Advertising</a></li>
<li><a href="#">Promote your ad</a></li>
<li><a href="#">Jobs Delivers</a></li>
<li><a href="#">FAQ</a></li>
</ul>
</div>
</div>

<div class="col-lg-3 col-sm-6">
<div class="footer-widget social-widget">
<h3>Follow us on</h3>
<ul>
<li><a href="#"><i class="fa fa-facebook-official"></i>Facebook</a></li>
<li><a href="#"><i class="fa fa-twitter-square"></i>Twitter</a></li>
<li><a href="#"><i class="fa fa-google-plus-square"></i>Google+</a></li>
<li><a href="#"><i class="fa fa-youtube-play"></i>youtube</a></li>
</ul>
</div>
</div>

<div class="col-lg-3 col-sm-6">
<div class="footer-widget news-letter">
<h3>Newsletter</h3>
<p>Jobs is Worldest leading Portal platform that brings!</p>

<form action="#">
<input type="email" class="form-control" placeholder="Your email id">
<button type="submit" class="btn btn-primary">Sign Up</button>
</form>
</div>
</div>
</div>
</div>
</section>
<div class="footer-bottom clearfix text-center">
<div class="container">
<p>Copyright &copy; <a href="#">Jobs</a> 2017. Developed by <a href="http://themeregion.com/">ThemeRegion</a></p>
</div>
</div>
</footer>

<div class="style-chooser">
<div class="style-chooser-inner">
<a href="#" class="toggler"><i class="fa fa-cog fa-spin"></i></a>
<h4>Presets</h4>
<ul class="preset-list clearfix">
<li class="preset1 active" data-preset="1"><a href="#" data-color="preset1"></a></li>
<li class="preset2" data-preset="2"><a href="#" data-color="preset2"></a></li>
<li class="preset3" data-preset="3"><a href="#" data-color="preset3"></a></li>
<li class="preset4" data-preset="4"><a href="#" data-color="preset4"></a></li>
</ul>
</div>
</div>


<script src="js/jquery.min.js" type="541f3305026d857b852e8267-text/javascript"></script>
<script src="js/popper.min.js" type="541f3305026d857b852e8267-text/javascript"></script>
<script src="js/bootstrap.min.js" type="541f3305026d857b852e8267-text/javascript"></script>
<script src="js/price-range.js" type="541f3305026d857b852e8267-text/javascript"></script>
<script src="js/main.js" type="541f3305026d857b852e8267-text/javascript"></script>
<script src="js/switcher.js" type="541f3305026d857b852e8267-text/javascript"></script>
<script type="541f3305026d857b852e8267-text/javascript">
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','../../www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-73239902-1', 'auto');
	  ga('send', 'pageview');

	</script>
<script src="../cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="541f3305026d857b852e8267-|49" defer></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8c3ef8931c800df6',t:'MTcyNjQ2OTkzNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='../cdn-cgi/challenge-platform/h/b/scripts/jsd/388c99dd0998/maind41d.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<!-- Mirrored from demo.themeregion.com/jobs/post.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 09 Sep 2024 08:15:09 GMT -->
</html>