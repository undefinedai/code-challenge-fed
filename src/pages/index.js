import { Fragment, useState } from "react"
import Header from "components/header"
import Nav from "components/nav"
import style from "../components/styles/pages/index.scss"

export default () => {
  const [cartCount, setCartCount] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  const [buttonText, setButtonText] = useState("Add to Cart")

  const addToCart = () => {
    setCartCount((c) => c + 1)
    setButtonText("Added!")
    setTimeout(() => {
      setButtonText("Add to Cart")
    }, 2000)
  }

  const handleNav = () => {
    setNavOpen((o) => !o)
  }

  return (
    <div className={style.wrapper}>
      <Header isOpen={navOpen} cartCount={cartCount} onToggleNav={handleNav} classname={navOpen ? [style.nav, style.navOpen].join(' ') : style.nav}/>
      <Nav classname={navOpen ? [style.nav, style.navOpen].join(' ') : style.nav}/>
      <div className={style.card}>
        <h1 className={style.card__title}>Product Name</h1>
        <img src="https://via.placeholder.com/150" alt="pretty sweet product" />
        <p>This is the product description</p>
        <button className={buttonText === "Added!" ? style.card__button__added : style.card__button} onClick={addToCart}>{buttonText}</button>
      </div>
    </div>
  )
}
