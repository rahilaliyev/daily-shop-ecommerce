import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/actions";
import "./ProductDetails.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Snackbar from "@material-ui/core/Snackbar";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const ProductDetails = () => {
  const productData = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const axiosProductDetails = async (id) => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") axiosProductDetails(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

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
    <div className="productDetails ">
      {Object.keys(productData).length === 0 ? (
        <Loading />
      ) : (
        <div className="productDetailsContainer container">
          <div className="productDetailsImage">
            <img src={productData.image} alt="Product" />
          </div>
          <div className="productDetailsText">
            <h2>{productData.title}</h2>
            <p>{productData.description}</p>
            <p>$ {productData.price}</p>
            <button onClick={() => addBasket(productData)}>
              <ShoppingCartIcon /> Add basket
            </button>
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
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
