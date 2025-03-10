import { Route, Routes } from "react-router";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import App from "../App";
import Contact from "../pages/contact/Contact";
import PrivacyAndPolicy from "../pages/privacy_policy/PrivacyAndPolicy";
import TermsOfUse from "../pages/termsOfUse/TermsOfUse";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/ProductDetails";
import NotFound from "../pages/notFound/NotFound";
import Career from "../pages/career/Career";
import ReturnPolicy from "../pages/returnPolicy/ReturnPolicy";
import FAQsHelp from "../pages/faqshelp/FAQsHelp";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products/:string" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

     
         
        <Route path="/career" element={<Career />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/faq" element={<FAQsHelp />} />
          
             {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
