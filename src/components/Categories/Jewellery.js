import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { jewelleryCategory, addToBasket } from "../../redux/actions/actions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Snackbar from "@material-ui/core/Snackbar";
import ModalButtonLogin from "../LoginRegister/ModalButtonLogin";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Mens = () => {
  const dispatch = useDispatch();
  const jewelleryCategories = useSelector(
    (state) => state.categoriesReduceer.data
  );
  const isLogged = useSelector((state) => state.login.data);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => dispatch(jewelleryCategory(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const [ModalOpenLogin, setModalOpenLogin] = useState(false);
  const setModalOpenFunc = () => {
    setModalOpenLogin(false);
  };
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
    <div className="category">
      <div className="product-container container">
        {jewelleryCategories.map((item, key) => (
          <div className="products" key={key}>
            <div className="product-image">
              <img src={item.image} alt="Product images" />
            </div>
            <p>{item.title}</p>
            <span>$ {item.price}</span>
            <div className="product-hover">
              {isLogged ? (
                <button onClick={() => addBasket(item)}>
                  <ShoppingCartIcon />
                  Add basket
                </button>
              ) : (
                <button onClick={() => setModalOpenLogin(true)}>
                  <ShoppingCartIcon />
                  Add basket
                </button>
              )}

              <Link to={`/product/${item.id}`}>
                <button>
                  <VisibilityIcon />
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
        <ModalButtonLogin
          ModalOpenLogin={ModalOpenLogin}
          setModalOpenFunc={setModalOpenFunc}
        />
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
      </div>
    </div>
  );
};

export default Mens;
