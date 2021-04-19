import React from "react";
import { Link } from "react-router-dom";
import { useRestaurantContext } from "../../Context/restaurantContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CustomMenu from "./CustomMenu";

function Navbar({ selected }) {
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
    setAnchorEl(null);
  };

  return (
    <div>
      <header className="text-gray-700 body-font bg-yellow-400 px-24">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">tailblocks</span>
          </a> */}
          <Link to="/">
            <img
              style={{ height: "50px" }}
              src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
              className="object-cover"
            />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className={`mr-5 text-white text-sm ${
                selected == "Home" ? "rounded-pill px-2 py-1 bg-black " : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`mr-5 text-white text-sm ${
                selected == "Menu" ? "rounded-pill px-2 py-1 bg-black " : ""
              }`}
            >
              Menu
            </Link>
            <Link
              to="/delivery"
              className={`mr-5 text-white text-sm ${
                selected == "Delivery" ? "rounded-pill px-2 py-1 bg-black " : ""
              }`}
            >
              Delivery
            </Link>
            <Link
              to="/tableRes"
              className={`mr-5 text-white text-sm ${
                selected == "Res" ? "rounded-pill px-2 py-1 bg-black " : ""
              }`}
            >
              Table Reservation
            </Link>
            <Link
              to="/contact"
              className={`mr-5 text-white text-sm ${
                selected == "Contact" ? "rounded-pill px-2 py-1 bg-black " : ""
              }`}
            >
              Contact us
            </Link>
          </nav>
          {!token ? (
            <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none  rounded-pill text-xs mt-2 md:mt-0">
              <Link
                to="/auth"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login/Signup
              </Link>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <AccountCircleIcon
                onClick={handleClick}
                fontSize="large"
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
          <CustomMenu
            handleClose={handleClose}
            anchorEl={anchorEl}
            logout={logout}
          />
          {/* <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none  rounded-pill text-xs mt-2 md:mt-0">
            <Link to="/auth" style={{ textDecoration: "none", color: "black" }}>
              Login/Signup
            </Link>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
