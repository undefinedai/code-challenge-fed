import React, { Fragment } from "react"
import App from "next/app"
import Head from "next/head"
import "normalize.css"
import "../components/styles/global.scss"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Head>
          <link 
            href="https://fonts.googleapis.com/css?family=Josefin+Sans|Lilita+One&display=swap" 
            rel="stylesheet" 
          />
        </Head>
        <Component {...pageProps} />
        <style global jsx>{`
          html {
            box-sizing: border-box;
          }
          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }
          body {
            background: #f7f7f7;
            font-family: 'Josefin Sans', sans-serif;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Lilita One', cursive;
          }
          a {
            text-decoration: none;
            color: inherit;
            letter-spacing: -.5px;
          }
        `}</style>
      </Fragment>
    )
  }
}
