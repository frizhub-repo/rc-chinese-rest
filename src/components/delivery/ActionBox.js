import Auth from "components/Auth";
import { useRestaurantContext } from "Context/restaurantContext";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { isEmpty } from "utils/common";
import AllergyAlert from "./AllergyAlert";
import Billing from "./Billing";
import OpenStatus from "./OpenStatus";
import OrderPickup from "./OrderPickup";

const styles = {
  container: {
    background: "#F49E0B",
    borderRadius: "20px",
  },
  button: {
    borderRadius: "20px",
    color: "white",
    padding: "10px 5px",
    margin: "5px 0px",
  },
  proceedButton: {
    background: "rgba(203, 14, 14, 0.6)",
  },
  paymentButton: {
    background: "#646464",
  },
};

export default function ActionBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };
  let { customerData, restaurant } = useRestaurantContext();
  const { products: ordersProducts, total } = useSelector(
    (state) => state.orders
  );
  const history = useHistory();
  const orderNow = () => {
    try {
      if (ordersProducts?.length <= 0) {
        throw new Error("Please provide some products to proceed");
      } else if (isEmpty(customerData)) {
        handleClickOpen();
      } else if (customerData?.addresses?.length) {
        history.push("/chooseAddress");
      } else {
        history.push("/deliveryAddress");
      }
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        return;
      }
      toast.error("Error occured");
    }
  };
  return (
    <div
      style={styles.container}
      className="ml-lg-5 ml-xs-0 d-flex flex-column justify-content-between align-items-center"
    >
      <OpenStatus openNow={restaurant?.placeData?.opening_hours?.open_now} />
      <div className="px-2 px-md-3 my-3">
        <AllergyAlert />
        <OrderPickup />
        <Billing />
        <div className="d-flex flex-column align-items-stretch">
          <button style={{ ...styles.proceedButton, ...styles.button }}>
            Add more 5€ to your order to proceed
          </button>
          <button
            style={{ ...styles.paymentButton, ...styles.button }}
            onClick={orderNow}
          >
            Choose a Payment method
          </button>
        </div>
      </div>
      {open && <Auth open={open} handleClickOpen={handleClickOpen} />}
    </div>
  );
}
