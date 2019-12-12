import React, { useState } from 'react'
import Link from "next/link"
import './topmenu.scss'
import { MdSearch, MdStar, MdShoppingCart, MdMenu } from "react-icons/md"
import { CSSTransitionGroup } from 'react-transition-group'

const Topmenu = (props) => {
  const [navOpen, setNavOpen] = useState(false)
  const handleNav = () => setNavOpen(!navOpen)


  /* For tests */
  // const [cartCount, setCount] = useState(0)
  // const addCount = () => setCount(cartCount + 1)

  return (
    <nav className="topmenu">
      <ul>
        <li><button className="btn btn-default btn-sm" onClick={props.addCount}>+1</button></li>
        <li><Link href="#"><a><MdSearch /></a></Link></li>
        <li><Link href="#"><a><MdStar /></a></Link></li>
        <li><Link href="/checkoutpage"><a>
          <CSSTransitionGroup
            transitionName="counter"
            transitionAppear={true}
            transitionAppearTimeout={200}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>
            <MdShoppingCart />
            {props.cartCount > 0 && <span className="count" key={props.cartCount}><span>{props.cartCount}</span></span>}
          </CSSTransitionGroup>
        </a></Link></li>
        <li>
          <div className="toggle-menu" onClick={handleNav}><MdMenu /></div>
          <ul className={navOpen ? "active" : ""}>
            <li><Link href="#"><a>Browse Categories</a></Link></li>
            <li><Link href="#"><a>About Us</a></Link></li>
            <li><Link href="/checkoutpage"><a>Checkout</a></Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Topmenu
