import React from "react";
import PageRouteBanner from "../../components/shared/pageRouteBanner/PageRouteBanner";

const About = () => {
  const leaders = [
    {
      name: "Md Kamruzzaman",
      position: "President",
      title: "President’s Message",
      message:
        "Ever since our establishment, Deshi Distributors has strived to create products and services that provide value to our customers. Better products equal better business.",
      image:
        "https://deshidistributors.com/Frontend/img/owners/mdkamruzzamann.jpeg",
    },
    {
      name: "Mohammed Abdur Rahman",
      position: "Vice President, Cofounder",
      title: "Vice President’s Message",
      message:
        "Deshi Distributors has been a pioneer in the South Asian products business in New York, meeting customers' needs with high-quality imports from Bangladesh, India, China, and beyond.",
      image:
        "https://deshidistributors.com/Frontend/img/owners/Mohammed%20Abdur%20Rahman_%20Vice%20President_Cofounder.JPG",
    },
    {
      name: "Mohammed Abdul Mannan",
      position: "CEO, Cofounder",
      title: "CEO’s Message",
      message:
        "With many years of dedication, we have provided the finest South Asian ethnic products to our partners. Our entrepreneurial culture and diverse workforce continue to be our core strengths.",
      image:
        "https://deshidistributors.com/Frontend/img/owners/Mohammed%20Abdul%20Mannan_CEO_Cofounder.JPG",
    },
    {
      name: "Mohammad Alamgir Kabir",
      position: "Cofounder",
      title: "Marketing Director’s Message",
      message:
        "We are committed to providing the best products and services. Our marketing team ensures prompt service and premium quality imports for our valued clients.",
      image:
        "https://deshidistributors.com/Frontend/img/owners/MOHAMMAD%20ALAMGIR%20KABIR_%20Cofounder.JPG",
    },
    {
      name: "Iftekhairul Alam",
      position: "Cofounder",
      title: "Cofounder’s Message",
      message:
        "Our team is dedicated to the highest quality service. We import the finest ethnic products and distribute them throughout the New York region.",
      image:
        "https://deshidistributors.com/Frontend/img/owners/Iftekhairul%20Alam_%20Cofounder.JPG",
    },
  ];

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
            Asia, delivering the joy of authentic flavors to our customers with
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
          {leaders.map((leader, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card shadow-sm p-4 d-flex flex-column align-items-center text-center h-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="rounded-circle border border-3 border-primary mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                  <h3 className="h5 fw-bold">{leader.title}</h3>
                  <h4 className="text-muted">{leader.name}, {leader.position}</h4>
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
