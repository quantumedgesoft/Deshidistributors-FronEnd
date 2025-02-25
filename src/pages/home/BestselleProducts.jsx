import { useState } from "react";
import Ovaltine from "/src/assets/prodducts/IMG-20250220-WA0320.jpg";
import Zafran from "/src/assets/prodducts/IMG-20250220-WA0276.jpg";
import BasilSeed from "/src/assets/prodducts/IMG-20250220-WA0281.jpg";
import SunFlowerOil from "/src/assets/prodducts/IMG-20250220-WA0308.jpg";
import HealthySoups from "/src/assets/prodducts/IMG-20250220-WA0332.jpg";
import Linkgo from "/src/assets/prodducts/IMG-20250220-WA0333.jpg";
import DryBean from "/src/assets/prodducts/IMG-20250220-WA0335.jpg";
import ElachiRusk from "/src/assets/prodducts/slider9.jpg";

const BestsellerProducts = () => {
  const [bestSellingItem, setBestSellingItem] = useState([
    {
      id: 1,
      name: "Ovaltine",
      imgUrl: Ovaltine,
      like: 34,
      disliked: 2,
      rating: 5,
    },
    {
      id: 2,
      name: "Zafran",
      imgUrl: Zafran,
      like: 27,
      disliked: 3,
      rating: 4,
    },
    {
      id: 3,
      name: "Basil Seed",
      imgUrl: BasilSeed,
      like: 45,
      disliked: 5,
      rating: 3,
    },
    {
      id: 4,
      name: "Sun Flower Oil",
      imgUrl: SunFlowerOil,
      like: 30,
      disliked: 1,
      rating: 4,
    },
    {
      id: 5,
      name: "Healthy Soups",
      imgUrl: HealthySoups,
      like: 27,
      disliked: 3,
      rating: 4,
    },
    {
      id: 6,
      name: "Linkgo",
      imgUrl: Linkgo,
      like: 67,
      disliked: 3,
      rating: 4,
    },
    {
      id: 7,
      name: "Dry Bean",
      imgUrl: DryBean,
      like: 27,
      disliked: 3,
      rating: 4,
    },
    {
      id: 8,
      name: "Elachi Rusk",
      imgUrl: ElachiRusk,
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
                  style={{"height":"150px"}}
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

export default BestsellerProducts;
