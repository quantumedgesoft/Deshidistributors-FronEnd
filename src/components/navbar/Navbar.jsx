import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import logo from "../../assets/Images/deshidistributors_logo.png";

const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    {
      name: "Products",
      link: "/products",
      dropdown: true,
      categories: [
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
      ],
    },
    { name: "Operation Map", link: "/operation-map" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="container-fluid fixed-top">
        <Topbar />
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            {/* Logo */}
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Deshi Distributors" style={{ width: "150px" }} />
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>

            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                {menuItems.map((item, idx) =>
                  item.dropdown ? (
                    <div className="nav-item dropdown" key={idx}>
                      <Link to={item.link} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        {item.name}
                      </Link>
                      <div className="dropdown-menu m-0 bg-secondary rounded-0 overflow-auto" style={{ maxHeight: "40vh" }}>
                        <Link to={item.link} className="dropdown-item">All Products</Link>
                        {item.categories.map((category, catIdx) => (
                          <Link key={catIdx} to={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`} className="dropdown-item">
                            {category}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link key={idx} to={item.link} className="nav-item nav-link">
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              <button type="button" className="btn btn-primary border-secondary py-2 px-4 rounded-pill text-white">
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
