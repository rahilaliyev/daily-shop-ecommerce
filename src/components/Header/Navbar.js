import React from "react";
import "./Navbar.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Navbar = () => {
  const womenLists = [
    "Rings",
    "Earrings",
    "Jewellery Sets",
    "Lockets",
    "Jeans",
    "Polo T-shirts",
    "Skirts",
    "Jackets",
    "Tops",
    "Make up",
    "Hair care",
    "Perfumes",
    "Skin care",
    "Hand Bags",
    "Single Bags",
    "Travel Bags",
    "Wallets & Belts",
    "Sunglasses",
    "Nails",
  ];
  return (
    <div className="menu">
      <nav className="container">
        <ul>
          <li>Home</li>
          <li>
            Men <KeyboardArrowDownIcon fontSize="small" />
            <ul className="navHover">
              <li>Casual</li>
              <li>Sports</li>
              <li>Formal</li>
              <li>Standart</li>
              <li>T-shirts</li>
              <li>Shirts</li>
              <li>Jeans</li>
              <li>Trousers</li>
              <li>
                And more... <ArrowForwardIosIcon fontSize="small" />
                <ul className="sub-navHover">
                  <li>Sleep Wear</li>
                  <li>Sandals</li>
                  <li>Loafers</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Women <KeyboardArrowDownIcon fontSize="small" />
            <ul className="navHover">
              <li>Kurta &#38; Kurti</li>
              <li>Trousers</li>
              <li>Casual</li>
              <li>Sports</li>
              <li>Formal</li>
              <li>Sarees</li>
              <li>Shoes</li>
              <li>
                And more... <ArrowForwardIosIcon fontSize="small" />
                <ul className="sub-navHover">
                  <li>Sleep Wear</li>
                  <li>Sandals</li>
                  <li>Loafers</li>
                  <li>
                    And more... <ArrowForwardIosIcon fontSize="small" />
                    <ul className="sub-sub-navHover">
                      {womenLists.map((item, key) => (
                        <li key={key}>{item}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Kids <KeyboardArrowDownIcon fontSize="small" />
            <ul className="navHover">
              <li>Casual</li>
              <li>Sports</li>
              <li>Formal</li>
              <li>Standart</li>
              <li>T-shirts</li>
              <li>Shirts</li>
              <li>Jeans</li>
              <li>Trousers</li>
              <li>
                And more... <ArrowForwardIosIcon fontSize="small" />
                <ul className="sub-navHover">
                  <li>Sleep Wear</li>
                  <li>Sandals</li>
                  <li>Loafers</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Sports</li>
          <li>
            Digital
            <KeyboardArrowDownIcon fontSize="small" />
            <ul className="navHover">
              <li>Camera</li>
              <li>Mobile</li>
              <li>Tablet</li>
              <li>Laptop</li>
              <li>Accesories</li>
            </ul>
          </li>
          <li>Furniture</li>
          <li>
            Blog
            <KeyboardArrowDownIcon fontSize="small" />
            <ul className="navHover">
              <li>Blog style 1</li>
              <li>Blog style 2</li>
              <li>Blog single</li>
            </ul>
          </li>
          <li>Contact</li>
          <li>
            Pages
            <KeyboardArrowDownIcon fontSize="small" />
            <ul className="navHover">
              <li>Shop Page</li>
              <li>Shop Single</li>
              <li>404 Page</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
