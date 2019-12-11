import Link from "next/link"

export default ({ classname, isOpen }) => {
  // if (!isOpen) {
  //   return null
  // }
  return (
    <nav className={classname}>
      <Link href="/checkout">
        <a>Check Out</a>
      </Link>
    </nav>
  )
}
