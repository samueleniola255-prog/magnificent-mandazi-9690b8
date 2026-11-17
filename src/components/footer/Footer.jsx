import React from "react";
import { Link } from "react-router-dom";
import { ResetLocation } from "../../helpers/ResetLocation";
import "./footer.css";

const Footer = ({ changeCategory }) => {
  const handleNavClick = (category) => {
    if (changeCategory) {
      changeCategory(category);
    }
    ResetLocation();
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-col footer-brand">
          <h3>Shopping Time</h3>
          <p>
            Your favorite fashion store delivering stylish women&apos;s clothing,
            shoes, and accessories across Nigeria and worldwide.
          </p>
          <div className="footer-badge">
            <span>🇳🇬</span> Proudly Serving Nigeria & Worldwide
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop Categories</h4>
          <ul>
            <li>
              <Link to="/store/all" onClick={() => handleNavClick("all")}>
                All Collection
              </Link>
            </li>
            <li>
              <Link to="/store/dresses" onClick={() => handleNavClick("dresses")}>
                Dresses
              </Link>
            </li>
            <li>
              <Link to="/store/blouses" onClick={() => handleNavClick("blouses")}>
                Blouses
              </Link>
            </li>
            <li>
              <Link to="/store/jeans" onClick={() => handleNavClick("jeans")}>
                Jeans
              </Link>
            </li>
            <li>
              <Link to="/store/shoes" onClick={() => handleNavClick("shoes")}>
                Shoes
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li>
              <Link to="/cart" onClick={ResetLocation}>
                Shopping Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" onClick={ResetLocation}>
                Checkout
              </Link>
            </li>
            <li>
              <span>Secure Card &amp; Online Payment</span>
            </li>
            <li>
              <span>Nationwide Nigeria Delivery</span>
            </li>
          </ul>
          <div className="footer-currencies">
            <span className="currency-tag featured">₦ NGN</span>
            <span className="currency-tag">$ USD</span>
            <span className="currency-tag">€ EUR</span>
            <span className="currency-tag">£ GBP</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Contact &amp; Support</h4>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-label">Email Support</span>
              <a
                href="mailto:somtochukwuemeka120@gmail.com"
                className="contact-value"
              >
                somtochukwuemeka120@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone &amp; WhatsApp</span>
              <a href="tel:+2348123456789" className="contact-value">
                +234 812 345 6789
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Lagos, Nigeria</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Business Hours</span>
              <span className="contact-value">Mon – Sat: 9:00 AM – 6:00 PM (WAT)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Shopping Time. All rights reserved.
        </p>
        <p>
          Customer Service:{" "}
          <a href="mailto:somtochukwuemeka120@gmail.com">
            somtochukwuemeka120@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
