/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import ActiveLink from "../Components/Home/ActiveLink/ActiveLink";
import "./Navbar.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../Pages/Blog/MyDocument";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const path = location?.pathname;

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
        <ActiveLink style={{ color: "orange", textDecoration: "none" }} to="/">
          Home
        </ActiveLink>
        <ActiveLink
          style={{ color: "orange", textDecoration: "none" }}
          to="/blog"
        >
          Blog
        </ActiveLink>
      </div>
      <div className="d-flex gap-4">
        {user && (
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src={user.photoURL}
            alt={user.displayName}
          />
        )}
        {path === "/blog" ? (
          <PDFDownloadLink
            className="d-flex align-items-center px-2 text-white"
            style={{ backgroundColor: "lightsalmon", borderRadius: "4px" }}
            document={<MyDocument />}
            fileName="somename.pdf"
          >
            Download PDF
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        ) : (
          ""
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
