import React from "react";
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
  return (
    <div
      style={styles.container}
      className="ml-lg-5 ml-xs-0 d-flex flex-column justify-content-between align-items-center"
    >
      <OpenStatus />
      <div className="px-2 px-md-3 my-3">
        <AllergyAlert />
        <OrderPickup />
        <Billing />
        <div className="d-flex flex-column align-items-stretch">
          <button style={{ ...styles.proceedButton, ...styles.button }}>
            Add more 5€ to your order to proceed
          </button>
          <button style={{ ...styles.paymentButton, ...styles.button }}>
            Choose a Payment method
          </button>
        </div>
      </div>
    </div>
  );
}
