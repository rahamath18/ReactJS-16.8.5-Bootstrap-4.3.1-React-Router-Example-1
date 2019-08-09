import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Services from './Services';
import Downloads from './Downloads';
import logo from './images/profpic.jpg';
import MainContent from './MainContent.js';

class Header extends React.Component {
   render() {
	  var mainNavStyle = {
         marginBottom:0
      }
	  var loginTxtStyle1 = {
		color: 'white'
	  }
	  var searchIconStyle1 = {
		color: 'white'
	  }
	  var loginTxtStyle2 = {
		width: '140px'
	  }
	  var mainContainerStyle1 = {
         marginTop:'10px'
      }
      return (
		  <Router>
		  <div class="container">		    
		    <div class="jumbotron text-center" style={mainNavStyle}>
			  <h1>Example Project on ReactJS 16.8.5 (React Router) with Bootstrap 4.3.1</h1>
			  <p>Resize this responsive page to see the effect!</p> 
			</div>

			<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			  <a class="navbar-brand" href={logo}><img src={logo} alt="logo"/></a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="collapsibleNavbar">
				<ul class="navbar-nav">
				  <li class="nav-item">
				    <Link to={'/'} className="nav-link">HOME</Link>
				  </li>
				  <li class="nav-item">
				    <Link to={'/contact'} className="nav-link">CONTACT</Link>
				  </li>	
				  <li class="nav-item">
					<Link to={'/about'} className="nav-link">ABOUT</Link>
				  </li>
				  <li class="nav-item">
					<Link to={'/products'} className="nav-link">PRODUCTS</Link>
				  </li>
				  <li class="nav-item">
					<Link to={'/services'} className="nav-link">SERVICES</Link>
				  </li>
				  <li class="nav-item">
					<Link to={'/downloads'} className="nav-link">DOWNLOADS</Link>
				  </li>				  							   
				</ul>
				<ul class="nav navbar-nav navbar-right ml-auto">
				  <li class="nav-item">
					<input type="text" name="search" value="" placeholder="Search ..."/>&nbsp;
					<i class="fa fa-search" style={searchIconStyle1}></i>
				  </li>
				  <li class="nav-item">
					<a href="login.html" class="nav-link"> <i class="fa fa-sign-in" style={searchIconStyle1}></i> Login</a>
				  </li>
		        </ul>
			  </div>  
			</nav>
			<div class="container" style={mainContainerStyle1}>
				<div class="row">
					<div class="col-sm-12">
						<Switch>
						  <Route exact path='/' component={Home} />
						  <Route path='/contact' component={Contact} />
						  <Route path='/about' component={About} />
						  <Route path='/products' component={Products} />
						  <Route path='/services' component={Services} />
						  <Route path='/downloads' component={Downloads} />
					  </Switch>
					</div>
				</div>
			</div>
         </div> 
		 <MainContent/>
		 </Router>
      );
   }
}

class AboutMyself extends React.Component {
   render() {
	  var myStyle = {
         fontSize: 15,
	     textAlign: "right"
      }
      return (
         <div style={myStyle}>
            <u>Rahamath S</u> - <a href = "mailto:rahamath18@yahoo.com?subject = Feedback&body = Message">rahamath18@yahoo.com</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </div>
      );
   }
}

export default Header;