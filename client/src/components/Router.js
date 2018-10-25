import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';

class Router extends Component {

	// componentDidMount() {
  //   this.props.fetchUser();
  // }

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Landing />
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default connect(null, actions)(Router);
