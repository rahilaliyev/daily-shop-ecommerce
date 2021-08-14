import React from "react";
import "./Header.scss";
import englishFlag from "../../assets/english.png";
import Logo from "../../assets/Logo.png";
import PhoneIcon from "@material-ui/icons/Phone";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import Navbar from "./Navbar";
import SearchBox from "./SearchBox";

const Header = () => {
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
              <span>My Account</span>
            </div>
            <div className="header-up-text">
              <span>Wishlist</span>
            </div>
            <div className="header-up-text">
              <span>My Cart</span>
            </div>
            <div className="header-up-text">
              <span>Chechkout</span>
            </div>
            <div className="header-up-text">
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-search-container">
        <div className="logo-search container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <SearchBox />
          <div className="wishList">
            <ShoppingBasketIcon /> <span>SHOPPING CARD</span>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
