import React from 'react'
import Intro from '../../components/intro'
import Products from '../../components/products'
// import './homepage.scss'

const Homepage = (props) => {
  return (
    <div>
      <Intro />
      <Products addToCart={props.addToCart}/>
    </div>
  )
}

export default Homepage
