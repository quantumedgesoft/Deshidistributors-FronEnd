import { Route, Routes } from "react-router";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import App from "../App"
import Contact from "../pages/contact/Contact";
import Shop from "../pages/shop/Shop";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/privacy-Policy" element={<PrivacyPolicy/>} />
      </Route>
    </Routes>
  );
};

export default Router;
