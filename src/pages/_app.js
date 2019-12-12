import React, { Fragment } from "react"
import App from "next/app"
import "normalize.css"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    )
  }
}
