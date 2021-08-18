import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadData } from "../../redux/actions/actions";
import axios from "axios";
import "./Clothes.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addToBasket } from "../../redux/actions/actions";
import Snackbar from "@material-ui/core/Snackbar";
import { Link } from "react-router-dom";

const Clothes = () => {
  const uploadDataInfo = useSelector((state) => state.uploadDataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(uploadData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const addBasket = (item) => {
    dispatch(addToBasket(item));
    handleClick();
  };

  //START for making Snackbar
  const [open, setOpen] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const action = <Link to="/basket">Go to the basket</Link>;
  // END for making Snackbar

  return (
    <section className="clothes">
      <div className="clothes-container container">
        {uploadDataInfo.map((item, key) => (
          <Link to={`/product/${item.id}`}>
            <div className="products" key={key}>
              <div className="product-image">
                <img src={item.image} alt="Product images" />
              </div>
              <p>{item.title}</p>
              <span>$ {item.price}</span>
              <div className="product-hover">
                <button onClick={() => addBasket(item)}>
                  <ShoppingCartIcon />
                  Add basket
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        action={action}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Your product was added."
      />
    </section>
  );
};

export default Clothes;
