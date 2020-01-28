import Link from "next/link"
import CartIcon from "components/cart-icon"
import { FaBars } from "react-icons/fa"

export default ({ cartCount, onToggleNav }) => {
  return (
    <header>
      <Link href="/">
        <a>Store Name</a>
      </Link>
      <div id="right">
        <button id="hamburger" onClick={onToggleNav}>
          <FaBars />
        </button>
        <CartIcon cartCount={cartCount} />
      </div>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 1rem;
        }
        #right {
          align-items: center;
          display: flex;
        }
        #hamburger {
          margin: 0 15px;
          background: none;
          border: none;
        }
        #hamburger:hover {
          cursor: pointer;
        }
      `}</style>
    </header>
  )
}
