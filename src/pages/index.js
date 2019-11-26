import { Fragment, useState } from "react"
import Header from "components/header"
import Nav from "components/nav"

export default () => {
  const [cartCount, setCartCount] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  const addToCart = () => {
    setCartCount((c) => c + 1)
  }

  const handleNav = () => {
    setNavOpen((o) => !o)
  }

  return (
    <div id="wrapper">
      <Header cartCount={cartCount} onToggleNav={handleNav} />
      <Nav isOpen={navOpen} />
      <div id="card">
        <h1>Product Name</h1>
        <p>This is the product description</p>
        <button onClick={addToCart}>Add to Cart</button>
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
      `}</style>
    </div>
  )
}
