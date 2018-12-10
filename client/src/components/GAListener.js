import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { PropTypes } from 'prop-types';

ReactGA.initialize('UA-104392508-3');

class GAListener extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  // https://www.w3schools.com/jsref/prop_loc_pathname.asp
  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}

export default GAListener;