import { Route, Routes } from "react-router";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import App from "../App";
import Contact from "../pages/contact/Contact";
import PrivacyAndPolicy from "../pages/privacy_policy/PrivacyAndPolicy";
import TermsOfUse from "../pages/termsOfUse/TermsOfUse";
import Products from "../pages/products/Products";
import Category from "../pages/category/Category";
import ProductDetails from "../pages/products/ProductDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:string" element={<Category />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Route>
    </Routes>
  );
};

export default Router;
