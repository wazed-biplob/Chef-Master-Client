/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return <Navigate state={{ from: location }} to={"/login"} />;
};

export default PrivateRoutes;
