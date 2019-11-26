import { Fragment } from "react"
import Link from "next/link"

export default () => {
  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <div id="checkout">
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="First Name" type="text" />
        </div>
        <div>
          <input placeholder="Last Name" type="text" />
        </div>
        <div>
          <input placeholder="Email" type="email" />
        </div>
        <div>
          <input placeholder="Phone" type="tel" />
        </div>
        <div>
          <select>
            <option value="">- State</option>
            <option value="KY">Kentucky</option>
          </select>
        </div>
        <div>
          <input type="checkbox" /> I agree to the terms and conditions
        </div>
        <div>
          <button type="submit">Check Out</button>
        </div>
      </form>
      <p>
        <Link href="/">
          <a>Continue shopping</a>
        </Link>
      </p>
      <style jsx>{`
        #checkout {
          margin: 0 auto;
          max-width: 640px;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  )
}
