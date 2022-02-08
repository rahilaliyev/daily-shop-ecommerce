import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Basket.scss";
import Total from "./Total.js";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromBasket,
} from "../../redux/actions/actions";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Basket = () => {
  const basketData = useSelector((state) => state.basket.data);
  const basketCount = useSelector((state) => state.basket.count);
  let amount = 0;
  basketData.forEach((item) => (amount = amount + item.price * basketCount));

  const dispatch = useDispatch();
  const removeBasket = (item) => {
    dispatch(removeFromBasket(item));
  };

  const incQty = (item) => {
    dispatch(increaseQuantity(item));
  };

  const decQty = () => {
    if (basketCount > 1) {
      dispatch(decreaseQuantity());
    }
  };

  return (
    <div className="basket container">
      <div className="basket-main">
        <div className="basket-product">
          {basketData.length === 0 ? (
            <h1>Your basket is empty</h1>
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
                  <button onClick={() => decQty()}>
                    <RemoveIcon />
                  </button>
                  <span>{basketCount}</span>
                  <button onClick={() => incQty(item)}>
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
