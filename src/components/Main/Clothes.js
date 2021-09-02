import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadData } from "../../redux/actions/actions";
import axios from "axios";
import "./Clothes.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addToBasket } from "../../redux/actions/actions";
import Snackbar from "@material-ui/core/Snackbar";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Form from "react-bootstrap/Form";
import ModalButtonLogin from "../LoginRegister/ModalButtonLogin";

const Clothes = () => {
  const uploadDataInfo = useSelector((state) => state.uploadDataReducer.data);
  const isLogged = useSelector((state) => state.login.data);
  const dispatch = useDispatch();
  const [ModalOpenLogin, setModalOpenLogin] = useState(false);

  const setModalOpenFunc = () => {
    setModalOpenLogin(false);
  };
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

  const sortedProducts = uploadDataInfo.slice();
  sortedProducts.sort((a, b) => b.id - a.id);

  return (
    <section className="clothes">
      <div className="clothes-container container">
        <div className="select">
          <Form.Select aria-label="Default select example">
            <option value="">None</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </Form.Select>
        </div>
        <div className="product-container">
          {uploadDataInfo.map((item, key) => (
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
        </div>
      </div>
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
    </section>
  );
};

export default Clothes;
