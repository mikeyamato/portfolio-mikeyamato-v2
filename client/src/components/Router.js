import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';

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
					<Route exact path='/register' component={ Register } />
					<Route exact path='/login' component={ Login } />
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default connect(null, actions)(Router);
