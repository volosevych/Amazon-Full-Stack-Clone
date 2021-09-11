import React from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://m.media-amazon.com/images/I/615hfyTPlYL._SX3000_.jpg" alt="Intel Core i7" />

                <div className="home__row">
                    <Product title="Intel Core i7-10700KF" price={299.99} image="https://m.media-amazon.com/images/I/714-1OvyFIL._AC_SL1500_.jpg" rating={4} />
                    <Product title="Roborock S7+ Robot Vacuum and Sonic Mop" price={750.00} rating={4} id="" image="https://m.media-amazon.com/images/I/513EduvbsNL._AC_SL1500_.jpg" />
                </div>

                <div className="home__row">
                    <Product title="DEWALT 20V MAX" price={179.00} rating={5} id="" image="https://m.media-amazon.com/images/I/81jUpxvLwXL._AC_SL1500_.jpg" />
                    <Product title="Minka-Aire F896-65-BNW" price={469.95} rating={4} id="" image="https://m.media-amazon.com/images/I/91S1PIX+yWL._AC_SL1500_.jpg" />
                    <Product title="Brita Standard Everyday Water Filter" price={26.99} rating={4} id="" image="https://m.media-amazon.com/images/I/51qaJZPphuS._AC_SL1200_.jpg" />
                </div>

                <div className="home__row">
                    <Product title="SAMSUNG (MZ-V8V1T0B/AM)" price={129.99} rating={5} id="" image="https://m.media-amazon.com/images/I/41JykwmoA2L._AC_.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home
