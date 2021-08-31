import React from "react";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classes from "./navbar.module.css";

function Navbar({ showLinks = true }) {
  const location = useLocation();
  let { token, setToken, restaurant } = useRestaurantContext();
  console.log({ token });
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {showLinks && (
        <nav
          className={`navbar fixed-top navbar-expand-lg navbar-dark ${classes.navbar}`}
        >
          <Link className="btn btn-outline-light navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collpase navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  MENU
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tableRes">
                  TABLE RESERVATION
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delivery">
                  DELIVERY
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
            <button
              className="d-flex btn btn-lg btn-outline-light btn-rounded"
              style={{ borderRadius: "20px" }}
              onClick={handleClickOpen}
            >
              <img
                src="assets/login.png"
                width="20"
                style={{ marginRight: "5px" }}
              />
              Sign In/Sign Up
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
