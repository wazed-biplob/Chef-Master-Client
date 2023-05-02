/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="d-flex justify-content-between align-items-center p-4">
      <div>
        <Link style={{ textDecoration: "none" }} to="/">
          {" "}
          <h1 style={{ color: "lightsalmon" }}>Chef Master</h1>
        </Link>
      </div>
      <div className="d-flex gap-4">
        <Link style={{ color: "orange", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ color: "orange", textDecoration: "none" }} to="/blog">
          Blog
        </Link>
      </div>
      <div className="d-flex gap-4">
        <p>{user.displayName}</p>
        <Button variant="warning">Login</Button>
        <Button variant="danger">Logout</Button>
      </div>
    </div>
  );
};

export default Header;
