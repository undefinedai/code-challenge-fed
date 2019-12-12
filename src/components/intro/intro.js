import React from 'react'
import Link from "next/link"
import './intro.scss'
// import introImg from '../../assets/images/logo-lg.png'
import { FaShopware } from "react-icons/fa"

const Intro = () => {
  return (
    <section className="section section-intro">
      <div className="intro-l">
        <FaShopware />
      </div>
      <div className="intro-r">
        <h1>Sed do eiusmod tempor incididunt!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
    </section>
  )
}

export default Intro


