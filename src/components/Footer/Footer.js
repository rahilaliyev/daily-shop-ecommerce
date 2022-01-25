import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="rows">
          <h3>Main Menu</h3>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="#"> Our Services</Link>
            </li>
            <li>
              <Link to="#"> Our Products</Link>
            </li>
            <li>
              <Link to="#"> About Us</Link>
            </li>
            <li>
              <Link to="#"> Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="rows">
          <h3>Knowledge Base</h3>
          <ul>
            <li>
              <Link to="#"> Delivery</Link>
            </li>
            <li>
              <Link to="#"> Returns</Link>
            </li>
            <li>
              <Link to="#"> Services</Link>
            </li>
            <li>
              <Link to="#"> Discount</Link>
            </li>
            <li>
              <Link to="#"> Special Offer</Link>
            </li>
          </ul>
        </div>
        <div className="rows">
          <h3>Useful links</h3>
          <ul>
            <li>
              <Link to="#">Site Map</Link>
            </li>
            <li>
              <Link to="#">Search</Link>
            </li>
            <li>
              <Link to="#">Advanced Search</Link>
            </li>
            <li>
              <Link to="#">Suppliers</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="rows">
          <h3>Contact us</h3>
          <ul>
            <li>
              <span>25 Astor Pl, NY 10003, USA</span>
            </li>
            <li>
              <span>
                <PhoneIcon /> +1 212-982-4589
              </span>
            </li>
            <li>
              <span>
                <EmailIcon /> dailyshop@gmail.com
              </span>
            </li>
            <li>
              <div className="footer-icons">
                <Link to="#">
                  <FacebookIcon fontSize="large" />
                </Link>
                <Link to="#">
                  <TwitterIcon fontSize="large" />
                </Link>
                <Link to="#">
                  <YouTubeIcon fontSize="large" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
