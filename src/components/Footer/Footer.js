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
              <Link> Home</Link>
            </li>
            <li>
              <Link> Our Services</Link>
            </li>
            <li>
              <Link> Our Products</Link>
            </li>
            <li>
              <Link> About Us</Link>
            </li>
            <li>
              <Link> Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="rows">
          <h3>Knowledge Base</h3>
          <ul>
            <li>
              <Link> Delivery</Link>
            </li>
            <li>
              <Link> Returns</Link>
            </li>
            <li>
              <Link> Services</Link>
            </li>
            <li>
              <Link> Discount</Link>
            </li>
            <li>
              <Link> Special Offer</Link>
            </li>
          </ul>
        </div>
        <div className="rows">
          <h3>Useful links</h3>
          <ul>
            <li>
              <Link>Site Map</Link>
            </li>
            <li>
              <Link>Search</Link>
            </li>
            <li>
              <Link>Advanced Search</Link>
            </li>
            <li>
              <Link>Suppliers</Link>
            </li>
            <li>
              <Link>FAQ</Link>
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
                <Link>
                  <FacebookIcon fontSize="large" />
                </Link>
                <Link>
                  <TwitterIcon fontSize="large" />
                </Link>
                <Link>
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
