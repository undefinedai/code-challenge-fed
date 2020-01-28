import { FaShoppingCart } from "react-icons/fa"

export default ({ cartCount = 0 }) => {
  return (
    <div>
      <FaShoppingCart id="cartIcon"/>
      {cartCount > 0 && <span>{cartCount}</span>}
    </div>
  )
}
