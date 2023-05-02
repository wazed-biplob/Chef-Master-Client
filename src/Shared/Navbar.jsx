/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="d-flex justify-content-between align-items-center p-4">
      <div>
        <Link style={{ textDecoration: "none" }} to="/">
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
        {user && (
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src={user.photoURL}
            alt={user.displayName}
          />
        )}
        {user ? (
          <Button onClick={handleLogOut} variant="secondary">
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button variant="danger">Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
