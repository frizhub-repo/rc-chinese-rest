import React from "react";
import classes from "./CourseItem.module.css";

const styles = {
  container: {
    background: "white",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
  },
  iconContainer: {
    display: "inline-block",
    position: "relative",
  },
  icon: {
    borderRadius: "20px 0px 0px 0px",
  },
  price: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    background: "white",
    borderRadius: "15px 15px 0px 0px",
  },
  details: {
    color: "#280813",
    margin: "0px 2px",
  },
  counter: {
    color: "#280813",
    padding: "4px",
  },
  basketContainer: {
    border: "2px solid #CB0E0E",
    borderRadius: "0px 20px 0px 0px",
    display: "flex",
    alignItems: "center",
    padding: "0px 2px",
  },
};

export default function CourseItem() {
  return (
    <div style={styles.container}>
      <div className="d-flex">
        <div style={styles.iconContainer}>
          <img style={styles.icon} src="assets/item-pic.png" />
          <h5 className="shadow-md" style={styles.price}>
            25€
          </h5>
        </div>
        <div>
          <img
            className={`shadow-md ${classes.vegan}`}
            src="assets/vegan.png"
          />
          <img
            className={`shadow-md ${classes.glutten_free}`}
            src="assets/glutten-free.png"
          />
          <img className={`shadow-md ${classes.hot}`} src="assets/hot.png" />
        </div>
        <div style={styles.details}>
          <h5>RAVIOLI AL VAPORE</h5>
          <p>Pasta di Grano, Sugo di Pomodoro, Peperoncino</p>
          <p>Allergeni: Farina</p>
        </div>
        <div className="d-flex flex-column">
          <h4
            className="shadow-md flex-1"
            style={{ ...styles.counter, cursor: "pointer" }}
          >
            -
          </h4>
          <h4 className="shadow-md flex-1" style={styles.counter}>
            0
          </h4>
          <h4
            className="shadow-md flex-1"
            style={{ ...styles.counter, cursor: "pointer" }}
          >
            +
          </h4>
        </div>
        <div style={styles.basketContainer}>
          <img src="assets/shopping-basket.png" width={40} />
        </div>
      </div>
      <div className="d-flex align-items-stretch">
        <p
          className={`flex-1 shadow-lg ${classes.size_option} ${classes.first_option}`}
        >
          extra small
        </p>
        <p className={`flex-1 shadow-lg ${classes.size_option}`}>small</p>
        <p className={`flex-1 shadow-lg ${classes.size_option}`}>medium</p>
        <p className={`flex-1 shadow-lg ${classes.size_option}`}>large</p>
        <p
          className={`flex-1 shadow-lg ${classes.size_option} ${classes.last_option}`}
        >
          extra large
        </p>
      </div>
    </div>
  );
}
