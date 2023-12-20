import React, { Component } from "react";
import Router from "next/router";
import ReactGA from "react-ga"; // Import ReactGA

class Index extends Component {
  componentDidMount = () => {
    // Initialize Google Analytics if not initialized already
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('G-6KBKR6S34V');
      window.GA_INITIALIZED = true;
    }

    // Track page view for the current URL
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Redirect to '/components'
    Router.push("/components");
  };

  render() {
    return <div />;
  }
}

export default Index;
