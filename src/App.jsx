import React from "react";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      navbar

      <Outlet/>

      footer
    </>
  );
};

export default App;
