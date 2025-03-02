import { BsMinecartLoaded } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";

const FactsSection = () => {
  return (
    <div className="container-flui py-5">
      <div className="container">
        <div className="bg-light p-2 rounded">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
                <FaUsers style={{fontSize:"70px"}}/>
                <h5  className="text-secondary">Satisfied customer</h5>
                <h1 className="text-primary">10k+</h1>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
                <RiCustomerService2Fill style={{fontSize:"70px"}}/>
                <h5 className="text-secondary">Quality of service</h5>
                <h1 className="text-primary">99%</h1>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
                <GrCertificate style={{fontSize:"70px"}}/>
                <h5 className="text-secondary">Quality certificates</h5>
                <h1 className="text-primary">33+</h1>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
                <BsMinecartLoaded style={{fontSize:"70px"}}/>
                <h5 className="text-secondary">Available products</h5>
                <h1 className="text-primary">200+</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
