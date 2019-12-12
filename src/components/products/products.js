import React from 'react';
import Link from "next/link"
import './products.scss'
//import productImg from '../../assets/images/product-220.jpg'
import { MdAddShoppingCart } from "react-icons/md"
import { IoMdImages } from "react-icons/io"

const Products = (props) => {



  return (
    <section className="section section-product-list">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="item">
            <div className="img"><Link href="#"><a><IoMdImages /></a></Link></div>
            <div className="item-info">
              <div className="title"><Link href="#"><a>Quis ipsum suspendisse ultrices gravida,</a></Link></div>
              <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
            </div>
            <div className="item-b">
              <div className="price">$119</div>
              <button className="btn btn-sm btn-primary" onClick={props.addToCart}><MdAddShoppingCart /> <span>Add to cart</span></button>
            </div>
          </div>
          <div className="item">
            <div className="img"><Link href="#"><a><IoMdImages /></a></Link></div>
            <div className="item-info">
              <div className="title"><Link href="#"><a>Quis ipsum suspendisse ultrices gravida,</a></Link></div>
              <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
            </div>
            <div className="item-b">
              <div className="price">$119</div>
              <button className="btn btn-sm btn-primary" onClick={props.addToCart}><MdAddShoppingCart /> <span>Add to cart</span></button>
            </div>
          </div>
          <div className="item">
            <div className="img"><Link href="#"><a><IoMdImages /></a></Link></div>
            <div className="item-info">
              <div className="title"><Link href="#"><a>Quis ipsum suspendisse ultrices gravida,</a></Link></div>
              <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
            </div>
            <div className="item-b">
              <div className="price">$119</div>
              <button className="btn btn-sm btn-primary" onClick={props.addToCart}><MdAddShoppingCart /> <span>Add to cart</span></button>
            </div>
          </div>
          <div className="item">
            <div className="img"><Link href="#"><a><IoMdImages /></a></Link></div>
            <div className="item-info">
              <div className="title"><Link href="#"><a>Quis ipsum suspendisse ultrices gravida,</a></Link></div>
              <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
            </div>
            <div className="item-b">
              <div className="price">$119</div>
              <button className="btn btn-sm btn-primary" onClick={props.addToCart}><MdAddShoppingCart /> <span>Add to cart</span></button>
            </div>
          </div>
          <div className="item">
            <div className="img"><Link href="#"><a><IoMdImages /></a></Link></div>
            <div className="item-info">
              <div className="title"><Link href="#"><a>Quis ipsum suspendisse ultrices gravida,</a></Link></div>
              <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
            </div>
            <div className="item-b">
              <div className="price">$119</div>
              <button className="btn btn-sm btn-primary" onClick={props.addToCart}><MdAddShoppingCart /> <span>Add to cart</span></button>
            </div>
          </div>
          <div className="item">
            <div className="img"><Link href="#"><a><IoMdImages /></a></Link></div>
            <div className="item-info">
              <div className="title"><Link href="#"><a>Quis ipsum suspendisse ultrices gravida,</a></Link></div>
              <div className="desc">Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. </div>
            </div>
            <div className="item-b">
              <div className="price">$119</div>
              <button className="btn btn-sm btn-primary" onClick={props.addToCart}><MdAddShoppingCart /> <span>Add to cart</span></button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Products
