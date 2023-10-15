import React from "react";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
