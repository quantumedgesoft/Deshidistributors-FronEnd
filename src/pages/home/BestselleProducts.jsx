import { useState } from "react";
import OrganicTomato from "/src/assets/img/best-product-1.jpg";

const BestselleProducts = () => {
  const [bestSellingItem, setBestSellingItem] = useState([
    {
      id: 1,
      name: "Organic Tomato",
      imgUrl: OrganicTomato,
      like: 34,
      disliked: 2,
      rating: 5,
    },
    {
      id: 2,
      name: "Fresh Orange",
      imgUrl: "/src/assets/img/best-product-2.jpg",
      like: 27,
      disliked: 3,
      rating: 4,
    },
    {
      id: 3,
      name: "Green Apple",
      imgUrl: "/src/assets/img/best-product-3.jpg",
      like: 45,
      disliked: 5,
      rating: 3,
    },
    {
      id: 4,
      name: "Organic Banana",
      imgUrl: "/src/assets/img/best-product-4.jpg",
      like: 30,
      disliked: 1,
      rating: 4,
    },
    {
      id: 5,
      name: "Fresh Orange",
      imgUrl: "/src/assets/img/best-product-2.jpg",
      like: 27,
      disliked: 3,
      rating: 4,
    },
  ]);

  // Handle Like
  const handleLike = (id) => {
    setBestSellingItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, like: item.like + 1 } : item
      )
    );
  };

  // Handle Dislike
  const handleDislike = (id) => {
    setBestSellingItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, disliked: item.disliked + 1 } : item
      )
    );
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h1 className="display-4">Top Choice Products</h1>
          <p>
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>

        <div className="row g-4">
          {bestSellingItem.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center p-4 border rounded bg-light">
                <img
                  src={item.imgUrl}
                  className="img-fluid rounded"
                  alt={item.name}
                />
                <div className="py-4">
                  <h5>{item.name}</h5>

                  {/* Dynamic Star Rating */}
                  <div className="d-flex my-3 justify-content-center">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-primary"></i>
                    ))}
                    {[...Array(5 - item.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-secondary"></i>
                    ))}
                  </div>

                  <h4 className="mb-3">$3.12</h4>

                  {/* Like & Dislike Section */}
                  <div className="d-flex justify-content-center gap-3">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => handleLike(item.id)}
                    >
                      <i className="fas fa-thumbs-up"></i> {item.like}
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDislike(item.id)}
                    >
                      <i className="fas fa-thumbs-down"></i> {item.disliked}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestselleProducts;
