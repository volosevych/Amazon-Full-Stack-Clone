import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>

                <div className="product__rating">
                    <p>5</p>
                </div>
            </div>

            <img src="" alt=""/>
        </div>
    )
}

export default Product
