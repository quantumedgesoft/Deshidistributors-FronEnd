import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported
import VegetableSlidder from "../../components/sliders/VegetableSlider";

const ProductDetails = () => {
  // const [mainImage, setMainImage] = useState("/img/products/Edible Oil.jpg");

  // Thumbnails data
  // const thumbnails = [
  //   "/img/products/Biscuit.jpg",
  //   "/img/products/Chanachur.png",
  //   "/img/products/Dates.png",
  //   "/img/products/Ghee.png",
  // ];

  // const changeImage = (src) => {
  //   setMainImage(src);
  // };

  return (
    <div className="container mt-5">
      <div className="ProductDetailsCont">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6 mb-4">
            <img
              src="/img/products/Edible Oil.jpg"
              alt="Product"
              className="img-fluid rounded mb-3 w-100 product-image"
              id="mainImage"
            />
            {/* <div className="d-flex justify-content-between px-lg-5">
              {thumbnails.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail rounded ${
                    mainImage === src ? "active" : ""
                  }`}
                  onClick={() => changeImage(src)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div> */}
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="mb-3 text-primary">Kolam Rice</h2>

            <div className="mb-3">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <span className="ms-2">4.5 (120 reviews)</span>
            </div>
            <p className="mb-4">
              Kolam rice, also known as Lachkari Raw Rice, is a variety of rice
              that is immensely popular in South India. It is known mainly due
              to its excellent taste, uniform size, and high nutritious values.
              It is organically harvested from rich Indian paddy fields and is a
              perfect substitute for Basmati rice in Biryanis. Authentic Kolam
              rice imparts a beautiful flowery smell when cooked – it is grainy,
              spongy, and easily digested. And its silky smooth texture makes it
              perfect for a wide variety of Indian Dishes.
            </p>
            <div className="mb-4 d-flex align-items-center gap-2">
              <h5>Color:</h5>
              <h6 className="d-flex align-items-center gap-4 text-primary">
                1kg, 2kg, 5kg
              </h6>
            </div>

            <div className="mt-4 h-100">
              <h5>Buy Now Online:</h5>

              <div className="availbleStore d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-4 overflow-hidden">
                <img
                  src="https://sarojagro.com/wp-content/uploads/2020/08/Amazon-Logo.jpg"
                  alt="Product"
                  className=""
                  style={{ maxWidth: "120px", height: "100%" }}
                />
                <img
                  src="https://sarojagro.com/wp-content/uploads/2020/08/Flipkart-Logo.jpg"
                  alt="Product"
                  className=""
                  style={{ maxWidth: "120px", height: "100%" }}
                />
                <img
                  src="https://sarojagro.com/wp-content/uploads/2020/08/Alibaba-Logo.jpg"
                  alt="Product"
                  className=""
                  style={{ maxWidth: "120px", height: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="my-5">
            <div className="d-flex justify-content-center align-items-center">
              <div className="bg-primary w-100" style={{ height:"2px"}}></div>
              <h2 className="mb-3 text-primary text-center py-5 w-100 fs-2">Related Products</h2>
              <div className="bg-primary w-100" style={{ height:"2px"}}></div>
            </div>
              <VegetableSlidder />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
