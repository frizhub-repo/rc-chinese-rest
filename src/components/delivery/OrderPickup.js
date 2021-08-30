import React, { useState } from "react";
import classes from "./OrderPickup.module.css";

const useStyle = () => ({
  container: {
    marginTop: "10px",
    background: "#280813",
    borderRadius: "20px",
    display: "flex",
    color: "white",
  },
  heading: {
    textDecoration: "underline",
    margin: "0px",
  },
});

export default function OrderPickup() {
  const styles = useStyle();
  const [selected, setSelected] = useState(0);

  return (
    <div style={styles.container}>
      <div
        onClick={() => setSelected(0)}
        className={`px-2 py-1 m-1 d-flex justify-content-between ${
          classes.option
        } ${selected === 0 ? classes.active : ""}`}
      >
        <div className="d-flex align-items-center justify-content-center">
          <img src="assets/food-package.png" width={50} />
        </div>
        <div className="ml-2 d-flex flex-column justify-content-center align-items-center">
          <p style={styles.heading}>Delivery at Home</p>
          <small>You’re missing 15€ for the</small>
          <small>FREE SHIPPING</small>
        </div>
      </div>
      <div
        onClick={() => setSelected(1)}
        className={`px-2 py-1 m-1 d-flex justify-content-between ${
          classes.option
        } ${selected === 1 ? classes.active : ""}`}
      >
        <div>
          <img src="assets/shop.png" width={50} />
        </div>
        <div className="ml-2 d-flex flex-column justify-content-center align-items-center">
          <p style={styles.heading}>PickUp Your Order</p>
          <small>Come to our local to get</small>
          <small>your order</small>
        </div>
      </div>
    </div>
  );
}
