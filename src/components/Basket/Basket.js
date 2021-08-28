import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Basket.scss";
import Total from "./Total.js";
import { removeFromBasket } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Basket = () => {
  const basketData = useSelector((state) => state.basket.data);
  let amount = 0;
  basketData.forEach((item) => (amount = amount + item.price));

  const dispatch = useDispatch();
  const removeBasket = (item) => {
    dispatch(removeFromBasket(item));
  };

  const [quantity, setQuantity] = useState(1);
  const quantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="basket container">
      <div className="basket-main">
        <div className="basket-product">
          {basketData.length === 0 ? (
            <h4>Your basket is empty</h4>
          ) : (
            <h4>
              My {basketData.length}
              {basketData.length === 1 ? " product:" : " products:"}
            </h4>
          )}

          {basketData.map((item, key) => (
            <div className="products" key={key}>
              <div className="product-image">
                <img src={item.image} alt="Product images" />
              </div>
              <div className="product-text">
                <p>{item.title}</p>
                <span>$ {item.price}</span>
                <p>{item.description}</p>
                <div className="quantity">
                  Quantity:
                  <button onClick={() => quantityDecrease()}>
                    <RemoveIcon />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <AddIcon />
                  </button>
                </div>
                <button onClick={() => removeBasket(item)}>Remove item</button>
              </div>
            </div>
          ))}
        </div>
        <div className="basket-buy-button">
          <Total totalprice={amount} />
        </div>
      </div>
    </div>
  );
};

export default Basket;
