import React from 'react'
import Logo from '../logo'
import Topmenu from '../topmenu'
import './header.scss'

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Topmenu cartCount={props.cartCount}/>
      </div>
    </header>
  )
}

export default Header
