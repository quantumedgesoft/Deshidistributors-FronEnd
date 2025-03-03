import { BsMinecartLoaded } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";

const FactsSection = () => {
  const facts = [
    {
      id: 1,
      icon: <FaUsers style={{ fontSize: "70px" }} />,
      title: "Satisfied Customers",
      count: "10k+",
    },
    {
      id: 2,
      icon: <RiCustomerService2Fill style={{ fontSize: "70px" }} />,
      title: "Quality of Service",
      count: "99%",
    },
    {
      id: 3,
      icon: <GrCertificate style={{ fontSize: "70px" }} />,
      title: "Quality Certificates",
      count: "33+",
    },
    {
      id: 4,
      icon: <BsMinecartLoaded style={{ fontSize: "70px" }} />,
      title: "Available Products",
      count: "200+",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="bg-light p-2 rounded">
          <div className="row g-4 justify-content-center">
            {facts.map((fact) => (
              <div key={fact.id} className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5 text-center">
                  {fact.icon}
                  <h5 className="text-secondary mt-3">{fact.title}</h5>
                  <h1 className="text-primary">{fact.count}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
