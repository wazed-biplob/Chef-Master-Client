import React from "react";
import Header from "../../Shared/Navbar";
import { Accordion } from "react-bootstrap";
import MyDocument from "./MyDocument";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  return (
    <>
      <Header />
      <MyDocument />
    </>
  );
};

export default Blog;
