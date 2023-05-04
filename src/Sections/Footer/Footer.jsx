/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About Us</h4>
            <p>
              Join our food community today and never miss out on a delicious
              recipe again!
            </p>
          </div>
          <div className="col-md-3">
            <h4>Opening Hours</h4>
            <ul className="list-unstyled">
              <li>Monday - Friday: 10am - 9pm</li>
              <li>Saturday: 11am - 10pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Location</h4>
            <p>
              123 Main Street
              <br /> Any town, USA
            </p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@chefMaster.com</p>
          </div>
          <div className="col-md-3">
            <h4>Stay Connected</h4>
            <p>Follow us on social media:</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i>
                    <FaFacebook style={{ fontSize: "28px", color: "white" }} />
                  </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i>
                    <FaLinkedin style={{ fontSize: "28px", color: "white" }} />
                  </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i>
                    <FaYoutube style={{ fontSize: "28px", color: "white" }} />
                  </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i>
                    <FaInstagram style={{ fontSize: "28px", color: "white" }} />
                  </i>
                </a>
              </li>
            </ul>
            <p>Subscribe to our newsletter:</p>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <button type="submit" className="btn btn-secondary mt-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Chef Master. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
