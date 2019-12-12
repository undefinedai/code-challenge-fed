import React from 'react'
import Select from 'react-select'
import Link from "next/link"

import './checkoutpage.scss'

const countryOptions = [
  { value: 'canada', label: 'Canada' },
  { value: 'usa', label: 'USA' },
  { value: 'uk', label: 'United Kingdom' }
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    //color: state.isSelected ? 'red' : 'blue',
    padding: '10px 20px',
  }),
  control: () => ({
    height: "50px",
    minHeight: 'fit-content',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: 8,
    background: '#fff'
  }),
  indicatorsContainer: () => ({
    marginLeft: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
    height: 50,
  }),
  dropdownIndicator: () => ({
    height: 50,
    width: 40,
    display: 'flex',
    alignItems: 'center'
  }),
  valueContainer: () => ({

    height: 50,
    padding: '10px 20px'
  })
}


const Checkoutpage = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault()
  }
  return (
    <>
      <h1>Checkout</h1>
      <section className="section section-checkout">
        <div className="checkout-l">
          <div className="checkout-form">
            <h4>Billing Information</h4>
            <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col col-6">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter your First Name" />
                  </div>
                </div>
                <div className="col col-6">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter your Last Name" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control is-invalid" id="email" placeholder="Enter your Email address" />
                <div className="invalid-feedback">Your email address is invalid.</div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter your Email address" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <Select
                  styles={customStyles}
                  options={countryOptions}
                  instanceId="country"
                  id="country"
                  theme={theme => ({
                    ...theme,
                    borderRadius: 8,
                    colors: {
                      ...theme.colors,
                      primary25: '#d8f3f1',
                      primary: '#00c3b3',
                    },
                  })}
                />
              </div>
              <div className="row">
                <div className="col col-8">
                  <div className="form-group">
                    <label htmlFor="state">State / Province</label>
                    <input type="text" className="form-control" id="state" />
                  </div>
                </div>
                <div className="col col-4">
                  <div className="form-group">
                    <label htmlFor="zip">ZIP / Postal Code</label>
                    <input type="text" className="form-control" id="zip" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="checkout-r">
          <div className="cart-summary">
            <h4>Cart Summary</h4>

            <div className="cart-products">
              <div className="item">
                <div className="item-info">
                  <div className="title">1 x Quis ipsum suspendisse ultrices gravida</div>
                  <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
                </div>
                <div className="item-price">$119</div>
              </div>
              <div className="item">
                <div className="item-info">
                  <div className="title">1 x Quis ipsum suspendisse ultrices gravida</div>
                  <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
                </div>
                <div className="item-price">$119</div>
              </div>
              <div className="item">
                <div className="item-info">
                  <div className="title">1 x Quis ipsum suspendisse ultrices gravida</div>
                  <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
                </div>
                <div className="item-price">$119</div>
              </div>
            </div>
            <div className="cart-total">
              <span className="label">Total:</span> <span className="val">$357</span>
            </div>
          </div>

          <button className="btn btn-primary btn-lg btn-block">Submit Order</button>
          <Link href="/"><a><button className="btn btn-secondar btn-lg btn-block mt-3">Continue Shopping</button></a></Link>

        </div>
      </section>
    </>
  )
}

export default Checkoutpage
