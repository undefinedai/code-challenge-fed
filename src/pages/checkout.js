import { useState } from "react"
import Link from "next/link"
import style from "../components/styles/pages/checkout.scss"

export default () => {

  const [isFirstActive, setFirstActive] = useState(false)
  const [isLastActive, setLastActive] = useState(false)
  const [isEmailActive, setEmailActive] = useState(false)
  const [isPhoneActive, setPhoneActive] = useState(false)
  const [isStateActive, setStateActive] = useState(false)
  const [isSubmitted, setSubmitted] = useState(false)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={style.checkout}>
    <h1>{isSubmitted ? 'Thanks for shopping with us!' : 'Complete Your Checkout'}</h1>
      <form className={style.form} onSubmit={handleSubmit}>
      {isSubmitted ? null : <><div className={style.checkout__input}>
          <label for="first" className={isFirstActive ? [style.checkout__float, style.checkout__label].join(' ') : style.checkout__label}>First Name</label>
          <input onFocus={() => setFirstActive(true)} id="first" type="text" />
        </div>
        <div className={style.checkout__input}>
          <label for="last" className={isLastActive ? [style.checkout__float, style.checkout__label].join(' ') : style.checkout__label}>Last Name</label>
          <input onFocus={() => setLastActive(true)} id="last" type="text" />
        </div>
        <div className={style.checkout__input}>
          <label for="email" className={isEmailActive ? [style.checkout__float, style.checkout__label].join(' ') : style.checkout__label}>Email</label>
          <input onFocus={() => setEmailActive(true)} id="email" type="email" />
        </div>
        <div className={style.checkout__input}>
          <label for="phone" className={isPhoneActive ? [style.checkout__float, style.checkout__label].join(' ') : style.checkout__label}>Phone Number</label>
          <input onFocus={() => setPhoneActive(true)} id="phone" type="tel" />
        </div>
        <div className={style.checkout__input}>
          <label for="state" className={isStateActive ? [style.checkout__float, style.checkout__label].join(' ') : style.checkout__label}>State</label>
          <select id="state" onChange={() => setStateActive(true)}>
            <option value=""></option>
            <option value="KY">Kentucky</option>
          </select>
        </div>
        <div className={style.checkout__checkbox}>
          <input type="checkbox" name="terms" id="terms"/>
          <label for="terms">I agree to the terms and conditions</label> 
        </div>
        <div>
          <button className={style.checkout__button} type="submit">Check Out</button>
        </div></>}
        <Link href="/">
          <button className={style.checkout__button__continue}>Continue Shopping</button>
        </Link>
      </form>
    </div>
  )
}
