import { Link } from "react-router";
import Topbar from "./Topbar";
import logo from "../../assets/Images/deshidistributors_logo.png";
const Navbar = () => {
  const categories = [
    "Snacks",
    "Pickle",
    "Miscellaneous",
    "Soap",
    "Healthcare & Beauty",
    "Paan",
    "Candy",
    "Tea, Coffee, Milk Drinks",
    "Honey",
    "Sauce",
    "Biscuit",
    "Dates",
    "Chanachur",
    "Noodles",
    "Ghee",
    "Salt",
    "Sugar",
    "Spices & Herb",
    "Nuts",
    "Edible Oil",
    "Flour",
    "Daal",
    "Rice",
  ];

  return (
    <>
      <div className="container-fluid fixed-top">
        <Topbar />
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="" className="" style={{ width: "150px" }} />
            </Link>

            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>

            {/* <MobileSideMenu categories={categories} /> */}

            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
              style={{ position: "relative" }}
            >
              <div className="navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>

                <div className="nav-item">
                  <Link
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Products
                  </Link>

                  <div
                    className="dropdown-menu m-0 bg-secondary rounded-0 overflow-auto"
                    style={{ maxHeight: "40vh" }}
                  >
                    {categories.map((item, idx) => (
                      <Link
                        key={idx}
                        href="cart.html"
                        className="dropdown-item"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="nav-item nav-link">
                  Operation Map
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary border-2 border-secondary py-2 px-4  rounded-pill text-white h-100"
                style={{ top: "0", right: "25%" }}
              >
                Career
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
