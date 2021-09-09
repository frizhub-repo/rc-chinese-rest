import React from "react";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Link, useHistory } from "react-router-dom";
import classes from "./navbar.module.css";
import Auth from "components/Auth";
import { useOrderContext } from "Context/OrderContext";
import { Badge, Menu, MenuItem } from "@material-ui/core";
import shopingBag from "Assets/images/shopingBag.png";

function Navbar({ showLinks = true }) {
  const history = useHistory();
  let { token, setToken, restaurant, customerData } = useRestaurantContext();
  const { pendingOrders } = useOrderContext();

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
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClickListItem = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMenuItemClick = (orderId) => {
    setAnchorEl1(null);
    history.push(`/ordersreceived/${orderId}`);
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
            {token ? (
              <button
                className="d-flex btn btn-lg btn-outline-light btn-rounded"
                style={{ borderRadius: "20px" }}
              >
                {customerData?.firstName} {customerData?.lastName}
              </button>
            ) : (
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
            )}
          </div>
        </nav>
      )}
      {pendingOrders?.length > 0 && (
        <>
          <Badge
            className={classes.trackOrderRoot}
            badgeContent={pendingOrders?.length}
            color="secondary"
            onClick={handleClickListItem}
          >
            <img src={shopingBag} className={classes.shopingBag} />
            <span>My Orders</span>
          </Badge>
          <Menu
            style={{ border: "1px solid #d3d4d5" }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="lock-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            {pendingOrders.map((order, index) => (
              <MenuItem
                key={order?._id}
                onClick={() => handleMenuItemClick(order?._id)}
                className={classes.menuItemRoot}
              >
                <div>
                  <span className={classes.orderId}>{order?.orderId}</span>{" "}
                  &nbsp;{" "}
                  <span
                    className={`${classes.statusRoot} ${
                      order?.status === "pending"
                        ? classes.pending
                        : order?.status === "accepted"
                        ? classes.accepted
                        : order?.status === "assigned" ||
                          order?.status === "pickedUp"
                        ? classes.assigned
                        : classes.requested
                    }`}
                  >
                    {order?.status}
                  </span>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
      {open && <Auth open={open} handleClickOpen={handleClickOpen} />}
    </div>
  );
}

export default Navbar;
