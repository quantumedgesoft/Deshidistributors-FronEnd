/* eslint-disable react/prop-types */
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router";

const MobileSideMenu = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer} className="py-2 px-3" type="button">
        <span className="fa fa-bars text-primary"></span>
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <div className="px-3 py-2">
          <div className="d-flex justify-content-between align-items-center">
            <div
              style={{ width: "130px", height: "60px", border: "1px solid" }}
            >
              <img
                src="/src/assets/Images/deshidistributors_logo.png"
                alt="deshi logo"
                style={{ height: "100%" }}
              />
            </div>

            <button
              className="btn"
              style={{
                border: "none",
                maxHeight: "fit-content",
                fontSize: "20px",
                color: "red",
                backgroundColor: "transparent",
              }}
            >
              X
            </button>
          </div>

          <ul className="mt-4">
            <Link className="" href="#">
              Active
            </Link>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
            <Link className="" href="#">
              Active
            </Link>
            <Link className="" href="#">
              Active
            </Link>
            <Link className="" href="#">
              Active
            </Link>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default MobileSideMenu;
