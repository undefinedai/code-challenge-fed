import { Fragment, useState } from "react"
import Header from "components/header"
import Nav from "components/nav"
import Button from "components/button"

import gsap from 'gsap';

export default () => {
  const [cartCount, setCartCount] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  const addToCart = () => {
    setCartCount((c) => c + 1)
  }

  const handleNav = () => {
    setNavOpen((o) => !o)
  }

  const cartAnimation = () => {
    const tl = gsap.timeline()
    tl.to('#cartIcon', { duration: 0.2, scale: 1.25 })
      .to('#cartIcon', { duration: 0.1, rotation: 15 })
      .to('#cartIcon', { duration: 0.1, rotation: -15 })
      .to('#cartIcon', { duration: 0.1, rotation: 0 })
      .to('#cartIcon', { duration: 0.2, scale: 1 })
  }

  return (
    <div id="wrapper">
      <Header cartCount={cartCount} onToggleNav={handleNav} />
      <Nav isOpen={navOpen} />
      <div id="card">
        <h1>Product Name</h1>
        <p>This is the product description</p>
        <Button
          type="button"
          action={addToCart}
          animation={cartAnimation}
        >Add to Cart</Button>
      </div>
      <style jsx>{`
        #wrapper {
          margin: 0 auto;
          max-width: 960px;
        }
        #card {
          background: #fff;
          box-shadow: 0 1px 3px #999;
          padding: 1rem;
        }
        #addToCart:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
