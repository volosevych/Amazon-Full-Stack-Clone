import React from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://m.media-amazon.com/images/I/615hfyTPlYL._SX3000_.jpg" alt="" />

                <div className="home__row">
                    <Product />
                </div>

                <div className="home__row">

                </div>

                <div className="home__row">
                    
                </div>
            </div>
        </div>
    )
}

export default Home
