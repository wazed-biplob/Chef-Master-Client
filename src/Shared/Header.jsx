import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-4">
      <div>
        <h1 style={{ color: "lightsalmon" }}>Chef Master</h1>
      </div>
      <div className="d-flex gap-4">
        <Link style={{ color: "lightcyan", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ color: "lightcyan", textDecoration: "none" }} to="/blog">
          Blog
        </Link>
      </div>
      <div className="d-flex gap-4">
        {/* <img src={user ? '' : ''} alt='user pic'/> */}
        <Button variant="warning">Login</Button>
        <Button variant="danger">Logout</Button>
      </div>
    </div>
  );
};

export default Header;
