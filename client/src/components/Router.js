import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux' // this helps bind the meeting point for the front end (Router.js). this helps provide the 'store' which hold the application state and needs to wrap around everything.  
// import { connect } from 'react-redux';
import * as actions from '../actions';
// import store from '../store';
import store from '../store2';
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
import ScrollToTop from './Scroll';
import './router.css';


class Router extends Component {

	// componentDidMount() {
  //   this.props.fetchUser();
  // }

	render() {
		return (
			<Provider store={ store } > 
				<BrowserRouter>
					<div className='router-main'>
						<Navbar />
							<ScrollToTop>
								<Switch>
									<Route exact path='/' component={ Landing } />
									<Route exact path='/work' component={ Work } />
									<Route exact path='/contact' component={ Contact } />
									<Route exact path='/payment' component={ Payment } />
									<Route exact path='/resources' component={ Resources } />
									<Route exact path='/signup' component={ Signup } />
									<Route exact path='/login' component={ Login } />
									<Route component={ NotFound } />  {/* catch all for any path not listed */}
								</Switch>
							</ScrollToTop>
						<Footer />
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default connect(null, actions)(Router);
