import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/footer/Footer";

const PrimaryLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
