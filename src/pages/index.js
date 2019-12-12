import { useState } from "react"
import Header from '../components/header'
import Homepage from './homepage'
import CheckoutPage from './checkoutpage'
import './index.scss'

export default () => {
const [cartCount, setCartCount] = useState(0)

const addToCart = () => {
  setCartCount(cartCount + 1)
}


  return (
    <div className="container">
      <Header cartCount={cartCount} addToCart={addToCart}/>
      <main className="main">
        <Homepage addToCart={addToCart}/>
      </main>
    </div>
  )
}
