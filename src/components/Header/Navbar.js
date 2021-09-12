import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu">
      <nav className="container">
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/categories/mensclothing"> Men's clothing </NavLink>
          </li>
          <li>
            <NavLink to="/categories/womensclothing">Women's clothing</NavLink>
          </li>
          <li>
            <NavLink to="/categories/electronics"> Electronics </NavLink>
          </li>
          <li>
            <NavLink to="/categories/jewellery"> Jewellery </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
