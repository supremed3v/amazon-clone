import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://github.com/BJ1209/Amazon-Web-Clone/blob/main/src/images/prime_banner.jpg?raw=true"
          className="home__image"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1231234"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://bukharibooks.com/wp-content/uploads/2020/01/the-lean-startup.png"
            rating={5}
          />
          <Product
            id="9457454"
            title="Kenwood 4 in 1 Blender & Juice Extractor - 1000w"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Ie7W51qmL.jpg"
          />
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            id="9457451"
            title="Apple Watch Series 5 44MM Space Gray MWVF2"
            price={447.53}
            rating={3}
            image="https://getemi.pk/wp-content/uploads/2020/02/Apple-Watch-Series-5-MWVF2-44mm-Space-Gray-Aluminum-Case-with-Sport-Band-GPS.jpg"
          />
          <Product
            id="9457452"
            title="Amazon Echo (3rd Gen) | Smart speaker with Alexa, Charcoal Fabric"
            price={99.99}
            rating={5}
            image="https://mobileimages.lowes.com/productimages/1bd5e292-b68d-4877-8400-b983034381ec/12025270.jpg?size=pdhi"
          />
          <Product
            id="9457453"
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 1TB) - Silver (4th Generation)"
            price={965.39}
            rating={5}
            image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="9457451"
            title="SAMSUNG LC49RG90SSUXEN Quad HD 49” Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={5}
            image="https://tomstrusted.com/wp-content/uploads/thumbs_dir/samsung-lc49rg90ssuxen-49-curved-led-gaming-monitor-super-ultra-wide-dual-ozd75euz05l82cac1ykxbo3hgv1ofuexhr4a07jdoo.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
