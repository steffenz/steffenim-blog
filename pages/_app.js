import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout/Layout';

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = { }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props;
    console.log(Component);
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}