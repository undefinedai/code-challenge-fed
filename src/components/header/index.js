import Link from "next/link"
import CartIcon from "components/cart-icon"
import style from "./header.scss"
import { FaBars, FaTimes } from "react-icons/fa"

export default ({ cartCount, isOpen, onToggleNav }) => {
  return (
    <header className={style.header}>
      <Link href="/">
        <a>Store Name</a>
      </Link>
      <div className={style.header__right}>
        <CartIcon className={style.header__cart} cartCount={cartCount} />
        <button className={style.header__button} onClick={onToggleNav}>
        {isOpen ? <FaTimes className={style.header__close} /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}
