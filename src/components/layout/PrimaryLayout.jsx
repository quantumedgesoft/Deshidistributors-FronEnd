import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";

const PrimaryLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default PrimaryLayout;
