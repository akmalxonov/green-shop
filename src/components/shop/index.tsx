import React from "react";
import "../shop/shop.scss";
import Navbar from "../navbar";
import ShopProducts from "./products";
import ShopTotal from "./totol";

const ShopComponent: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="shop">
        <div className="container">
          <div className="shop_wrapper">
            <ShopProducts />
            <ShopTotal />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopComponent;
