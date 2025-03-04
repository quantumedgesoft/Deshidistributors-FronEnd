import PageRouteBanner from './../../components/shared/pageRouteBanner/PageRouteBanner';
import DiscountSlider from '../../components/sliders/DiscountSlider';

const Products = () => {
  return (
    <div>
      <PageRouteBanner PageName="Products"/>

      <div className="container py-5">
        {/* Products Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Products</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Our products are sourced from Bangladesh, India, China, and beyond. We provide the finest quality products at the best prices.
          </p>
          </div>
          </div>
          <div className="container py-5">
              <h1 className="mb-5">Soap</h1>
              <DiscountSlider />
          </div>

          <div className="container py-5">
              <h1 className="mb-5">Tea, Coffee, Milk Drinks</h1>
              <DiscountSlider />
          </div>
          <div className="container py-5">
              <h1 className="mb-5">Dates</h1>
              <DiscountSlider />
          </div>
    </div>
  )
}

export default Products
