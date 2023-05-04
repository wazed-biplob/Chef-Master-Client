import React from "react";
import Header from "../../Shared/Navbar";
import { Accordion } from "react-bootstrap";
import MyDocument from "./MyDocument";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import Footer from "../../Sections/Footer/Footer";

const Blog = () => {
  return (
    <>
      <Header />
      <MyDocument />
      <Footer />
    </>
  );
};

export default Blog;
