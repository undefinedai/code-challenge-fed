import Link from "next/link"
import gsap from "gsap"
import { useEffect } from "react"

export default ({ isOpen }) => {
  useEffect(() => {
    gsap.to('#nav', { duration: 0.5, ease: "elastic.out(1, 0.8)", scaleX: isOpen ? 1 : 0 })
  }, [isOpen])

  return (
    <nav id="nav">
      <Link href="/checkout">
        <a>Check Out</a>
      </Link>
      <style jsx>{`
        #nav {
          margin: 10px;
        }
      `}</style>
    </nav>
  )
}
