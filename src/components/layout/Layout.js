import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, isFlex = false }) => {
  return (
    <div className={`height-screen ${isFlex ? "flex flex-col" : ""}`}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
