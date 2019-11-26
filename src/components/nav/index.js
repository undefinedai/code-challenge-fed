import Link from "next/link"

export default ({ isOpen }) => {
  if (!isOpen) {
    return null
  }
  return (
    <nav>
      <Link href="/checkout">
        <a>Check Out</a>
      </Link>
    </nav>
  )
}
