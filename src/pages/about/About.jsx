import React from "react";
import useDataFetcher from "../../utils/FetchDatas";
import PageRouteBanner from "../../components/shared/pageRouteBanner/PageRouteBanner";

const About = () => {
  const {data} = useDataFetcher("/team/");
  return (
    <div>
      <PageRouteBanner PageName="About" />
      <div className="container py-5">
        {/* About Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">About Us</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Deshi Distributors has become a recognized company known for
            reputability, responsibility, and product quality.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-5">
          <h2 className="fw-bold">Who We Are?</h2>
          <p className="fs-5">
            Deshi Distributors provides international and domestic suppliers
            with a reliable means of getting products to customers. We have made
            a name for ourselves in the industry and will continue to do so in
            the years to come.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-5">
          <h2 className="fw-bold">What We Do?</h2>
          <p className="fs-5">
            We import, export, and distribute high-quality food products from
            Asiimport useDataFetcher from './../../utils/FetchDatas';
a, delivering the joy of authentic flavors to our customers with
            consistency and reliability.
          </p>
        </div>

        {/* How We Are Different */}
        <div className="mb-5">
          <h2 className="fw-bold">How Are We Different?</h2>
          <p className="fs-5">
            Deshi Distributors sources only the best of Asia. We rigorously test
            all products before distribution to ensure premium quality. We
            continuously seek outstanding new products to serve our customers
            better.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="row g-4">
          {data.map((leader, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card shadow-sm p-4 d-flex flex-column align-items-center text-center h-100">
                <img
                  src={leader.picture}
                  alt={leader.name}
                  className="rounded-circle border border-3 border-primary mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                  <h3 className="h5 fw-bold">{leader.designation}’s Message</h3>
                  <h4 className="text-muted">{leader.name}, {leader.designation}</h4>
                  <p className="fst-italic mt-2">"{leader.message}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
