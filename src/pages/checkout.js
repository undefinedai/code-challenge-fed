import { Fragment, useState } from "react"
import Link from "next/link"

import Button from "components/button"

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default () => {
  const [formData, setFormData] = useState({ fname: "", lname: "", email: "", phone: "", state: "" })
  const [checkboxState, setCheckboxState] = useState(false)

  const handleSubmit = (ev) => {
    ev.preventDefault()

    if (
      formData.fname.trim() === "" ||
      formData.lname.trim() === "" ||
      !formData.email.match(emailRegex) ||
      formData.phone.trim().length !== 10 ||
      formData.state === ""
    ) {
      alert("Whoops! Please make sure all fields are filled out and properly formatted and try again.")
    } else if (
      checkboxState === false
    ) {
      alert("You must agree to the terms and conditions to continue.")
    } else {
      alert("Congrats, your order has successfully been placed!")
    }
  }

  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value })
  }

  return (
    <div id="checkout">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="input"
            placeholder="First Name"
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Last Name"
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <select className="input" name="state" value={formData.state} onChange={handleChange}>
            <option value="">- State</option>
            <option value="KY">Kentucky</option>
          </select>
        </div>
        <div>
          <input
            id="checkbox"
            type="checkbox"
            checked={checkboxState}
            onChange={() => {setCheckboxState(!checkboxState)}}
          /> I agree to the terms and conditions
        </div>
        <div>
          <Button
            type="submit"
            action={() => {}}
          >Check Out</Button>
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
        #checkbox {
          margin: 10px 0;
        }
        .input {
          margin: 5px 0;
          padding: 10px 5px;
          border-radius: 5px;
          border: solid 1px grey;
          outline: none;
        }
      `}</style>
    </div>
  )
}
