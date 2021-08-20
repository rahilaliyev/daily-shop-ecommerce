import React, { useState } from "react";
import "./Header.scss";
import englishFlag from "../../assets/english.png";
import Logo from "../../assets/Logo.png";
import PhoneIcon from "@material-ui/icons/Phone";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import ModalButtonLogin from "./ModalButtonLogin";

const Header = () => {
  const basketCount = useSelector((state) => state.basket.data);
  const [ModalOpenLogin, setModalOpenLogin] = useState(false);

  const setModalOpenFunc = () => {
    setModalOpenLogin(false);
  };
  return (
    <header>
      <div className="header-up-container">
        <div className="header-up container">
          <div className="header-up-left">
            <div className="dropdown">
              <img src={englishFlag} alt="English Flag" />
              <span>ENGLISH</span> <KeyboardArrowDownIcon fontSize="small" />
            </div>
            <div className="currency">
              <span>$ USD</span> <KeyboardArrowDownIcon fontSize="small" />
            </div>
            <div className="number">
              <PhoneIcon fontSize="small" />
              <span>00-62-658-658</span>
            </div>
          </div>
          <div className="header-up-right">
            <div className="header-up-text">
              <Link>My Account</Link>
            </div>
            <div className="header-up-text">
              <Link>Wishlist</Link>
            </div>
            <div className="header-up-text">
              <Link>My Cart</Link>
            </div>
            <div className="header-up-text">
              <Link>Chechkout</Link>
            </div>
            <div className="header-up-text">
              <button onClick={() => setModalOpenLogin(true)}>Login</button>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-search-container">
        <div className="logo-search container">
          <Link to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <SearchBox />
          <Link to="/basket">
            <div className="wishList">
              <ShoppingBasketIcon />
              <span>{basketCount.length}</span>
              <span>SHOPPING CARD</span>
            </div>
          </Link>
        </div>
      </div>
      <Navbar />
      <ModalButtonLogin
        ModalOpenLogin={ModalOpenLogin}
        setModalOpenFunc={setModalOpenFunc}
      />
    </header>
  );
};

export default Header;
