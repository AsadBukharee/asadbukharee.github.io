import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import ReactGA from "react-ga";
import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";

export default class MyApp extends App {
  componentDidMount() {
    ReactGA.initialize('G-6KBKR6S34V');

    // Track page view on route change
    Router.events.on("routeChangeComplete", (url) => {
      ReactGA.pageview(url);
    });
  }

  componentWillUnmount() {
    Router.events.off("routeChangeComplete", (url) => {
      ReactGA.pageview(url);
    });
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>NextJS Material Kit by Creative Tim</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
