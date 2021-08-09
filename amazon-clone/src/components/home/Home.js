import React from 'react';
import Product from '../product/Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
            <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />

            <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" />
        </div>

        <div className="home__row">
            <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
        </div>

        <div className="home__row">
            <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
            <Product
                id="54354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
        </div>

        <div className="home__row">
          <Product 
                id="10752638"
                title="Apple iMac 27 Retina 5K Display, 3.6GHz 10-Core Intel Core i9, 64GB RAM, 1TB SSD, AMD Radeon Pro 5300 4GB"
                price={3799.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/71z+iYqulHL._AC_SL1200_.jpg" />
          <Product 
                id="19203847"
                title="ASUS ZenBook Pro Duo UX581 Laptop, 15.6” 4K UHD NanoEdge Touch Display, Intel Core i7-10750H, 16GB RAM, 1TB PCIe SSD, GeForce RTX 2060, ScreenPad Plus"
                price={2298.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/81e46P26WuS._AC_SL1500_.jpg" />
        </div>

        <div className="home__row">
          <Product 
                id="66027398"
                title="Adidas Originals Jeans Men's shoes"
                price={99.00}
                rating={5}
                image="https://i8.amplience.net/i/jpl/jd_378256_a?qlt=92&w=750&h=531&v=1&fmt=webp" />
          <Product 
              id="91876530"
                title="Bugatti RIPTIDE Marine/Brown"
                price={55,96}
                rating={4}
                image="https://photos6.spartoo.eu/photos/189/18970666/18970666_500_A.jpg" />
          <Product 
              id="98761324"
                title="Adidas ED6074 Men originals Firebird Track TOP jacket Orange"
                price={65.43}
                rating={5}
                image="https://i.ebayimg.com/images/g/D08AAOSwndZfIl97/s-l1600.jpg" />

        </div>
      </div>
    </div>
  );
}

export default Home;