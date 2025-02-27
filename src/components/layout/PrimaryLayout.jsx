import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/footer/Footer";
import Copyright from "../shared/footer/Copyright";

const PrimaryLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright/>
    </div>
  );
};

export default PrimaryLayout;
