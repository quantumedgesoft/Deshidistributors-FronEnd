import { Route, Routes } from "react-router";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import App from "../App"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Router;
