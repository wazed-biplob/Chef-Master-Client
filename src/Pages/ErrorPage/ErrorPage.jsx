import React from "react";
import { FaRegFrown, FaSadCry } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-4 p-4">
      <FaRegFrown style={{ fontSize: "200px" }} />
      <h6>404: Page Not Found. </h6>
      <p> Oops! Looks like the page you're looking for doesn't exist.</p>
      <p>It seems that the page you were trying to access doesn't exist.</p>
      <p>
        <br /> Try checking the URL for errors, or return to the homepage.
      </p>
      <Link to="/">
        <button className="btn btn-secondary">Take me back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
