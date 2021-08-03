import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadData } from "../../redux/actions/actions";
import axios from "axios";
import "./Clothes.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Clothes = () => {
  const uploadDataInfo = useSelector((state) => state.uploadDataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(uploadData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <section className="clothes">
      <div className="clothes-container container">
        {uploadDataInfo.map((item, key) => (
          <div className="products" key={key}>
            <div className="product-image">
              <img src={item.image} alt="Product images" />
            </div>
            <p>{item.title}</p>
            <span>$ {item.price}</span>
            <div className="product-hover">
              <button>
                <ShoppingCartIcon />
                Add basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clothes;
