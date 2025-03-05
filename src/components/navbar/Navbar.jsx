import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import logo from "../../assets/Images/deshidistributors_logo.png";
import useDataFetcher from "../../utils/FetchDatas";

const Navbar = () => {
  const {data} = useDataFetcher("/site-content/");
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    {
      id: 3,
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
    { id: 5, name: "Operation Map", link: "/about" },
    { id: 6, name: "Career", link: "/career" },
  ];

  return (
    <>
      <div className="container-fluid fixed-top">
        <Topbar />
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            {/* Logo */}
            <Link to="/" className="navbar-brand">
              <img
                src={data?.data?.main_logo || logo}
                alt="Deshi Distributors"
                style={{ width: "150px" }}
              />
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

            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                {menuItems.map((item) =>
                  item.dropdown ? (
                    <div className="nav-item dropdown" key={item.id}>
                      <Link
                        to={item.link}
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        {item.name}
                      </Link>
                      <div
                        className="dropdown-menu m-0 bg-secondary rounded-0 overflow-auto"
                        style={{ maxHeight: "40vh" }}
                      >
                        <Link to={item.link} className="dropdown-item">
                          All Products
                        </Link>
                        {item.categories.map((category, catIdx) => (
                          <Link
                            key={catIdx}
                            to={`/products/${category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="dropdown-item"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                    key={item.id}
                      to={item.link}
                      className="nav-item nav-link"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-primary border-secondary py-2 px-4 rounded-pill text-white"
                >
                  Contact
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
