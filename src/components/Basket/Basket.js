import React from "react";
import { useSelector } from "react-redux";
import "./Basket.scss";

const Basket = () => {
  const basketData = useSelector((state) => state.basket.data);
  return (
    <div className="basket container">
      <div className="basket-main">
        {basketData.map((item, key) => (
          <div className="products" key={key}>
            <div className="product-image">
              <img src={item.image} alt="Product images" />
            </div>
            <div className="product-text">
              <p>{item.title}</p>
              <span>$ {item.price}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="basket-buy-button">
        <button>Buy now</button>
      </div>
    </div>
  );
};

export default Basket;
