/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import ActiveLink from "../Components/Home/ActiveLink/ActiveLink";
import "./Navbar.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../Pages/Blog/MyDocument";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

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
    <div
      className={
        path == "/blog"
          ? "bg-light d-flex justify-content-between align-items-center pt-2 px-4"
          : "d-flex justify-content-between align-items-center pt-2 px-4"
      }
    >
      <div className="d-flex align-items-center">
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="logo" style={{ color: "lightsalmon" }}>
            Chef Master
          </h1>
        </Link>
      </div>
      <div className="menu d-flex align-items-center gap-3">
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
          <>
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
            >
              <img
                className="profile-picture"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user.photoURL}
                alt={user.displayName}
              />
            </a>
            <Tooltip id="my-tooltip" />
          </>
        )}
        {path === "/blog" ? (
          <PDFDownloadLink
            className="d-flex align-items-center px-2 text-white"
            style={{ backgroundColor: "lightsalmon", borderRadius: "4px" }}
            document={<MyDocument />}
            fileName="blog.pdf"
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
