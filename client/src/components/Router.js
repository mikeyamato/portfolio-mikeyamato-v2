import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';
import Work from './work/Work';
import Contact from './contact/Contact';
import Payment from './payment/Payment';
import Resources from './resources/Resources';
import Signup from './auth/Signup';
import Login from './auth/Login';
import NotFound from './not-found/NotFound';

class Router extends Component {

	// componentDidMount() {
  //   this.props.fetchUser();
  // }

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Route exact path='/' component={ Landing } />
					<Route exact path='/work' component={ Work } />
					<Route exact path='/contact' component={ Contact } />
					<Route exact path='/payment' component={ Payment } />
					<Route exact path='/resources' component={ Resources } />
					<Route exact path='/signup' component={ Signup } />
					<Route exact path='/login' component={ Login } />
					<Route exact path='/not-found' component={ NotFound } />
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default connect(null, actions)(Router);
