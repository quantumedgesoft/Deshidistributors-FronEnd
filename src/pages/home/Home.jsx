import BannerOne from "./BannerOne";
import BestsellerProducts from "./BestselleProducts";
import FactsSection from "./FactsSection";
import FeaturesCategory from "./FeaturesCategory";
import FeaturesFruitsDisplay from "./FeaturesFruitsDisplay";
import FeaturesVegetablesDisplay from "./FeaturesVegetablesDisplay";
import HeroSection from "./HeroSection";
import OrganicFruitsDisplay from "./OrganicFruitsDisplay";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesCategory />
      <OrganicFruitsDisplay />
      <FeaturesFruitsDisplay />
      <FeaturesVegetablesDisplay />
      <BannerOne />
      <BestsellerProducts />
      <FactsSection />
      <Testimonial/>
    </div>
  );
};

export default Home;
