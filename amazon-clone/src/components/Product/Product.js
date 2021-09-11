import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
    return (
        <div className="product">
            <div className="product__info">
                <a href="google.com">{title}</a>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {/* cool trick */}
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className="product__star"/>
                    ))}
                </div>
            </div>

            <img src={image} alt=""/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
