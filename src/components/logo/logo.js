import React from 'react'
import Link from "next/link"
import './logo.scss'
import { FaShopware } from "react-icons/fa"

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/"><a>
        <FaShopware />
        <span>Undefined</span>
      </a></Link>
    </div>
  )
}

export default Logo
