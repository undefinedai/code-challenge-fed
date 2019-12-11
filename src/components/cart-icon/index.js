import Link from "next/link"
import style from "./cart-icon.scss"
import { FaShoppingCart } from "react-icons/fa"

export default ({ cartCount = 0 }) => {
  return (
    <div className={style.wrapper}>
      <Link href="/checkout"><a><FaShoppingCart className={style.cartIcon} /></a></Link>
      <span className={cartCount > 0 ? [style.cart, style.show].join(' ') : style.cart}>{cartCount}</span>
    </div>
  )
}
