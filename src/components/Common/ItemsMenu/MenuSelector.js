import React, { useState } from "react";
import classes from "./MenuSelector.module.css";

const styles = {
  option: {
    cursor: "pointer",
    border: "2px solid #280813",
    borderRadius: "20px",
    padding: "5px",
  },
  image: {
    borderRadius: "50%",
  },
};

export default function MenuSelector() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="d-flex justify-content-center">
      <div
        style={styles.option}
        className={`d-flex flex-column align-items-center ${
          selected === 0 ? classes.active : classes.un_active
        }`}
      >
        <h4>First Course</h4>
        <img
          className="p-1 shadow-md"
          style={styles.image}
          src="assets/first-course.png"
          width={40}
        />
      </div>
      <div
        style={styles.option}
        className={`d-flex flex-column align-items-center ${
          selected === 1 ? classes.active : classes.un_active
        }`}
      >
        <h4>Second Course</h4>
        <img
          className="p-1 shadow-md"
          style={styles.image}
          src="assets/second-course.png"
          width={40}
        />
      </div>
      <div
        style={styles.option}
        className={`d-flex flex-column align-items-center ${
          selected === 2 ? classes.active : classes.un_active
        }`}
      >
        <h4>Desserts</h4>
        <img
          className="p-1 shadow-md"
          style={styles.image}
          src="assets/desserts.png"
          width={40}
        />
      </div>
      <div
        style={styles.option}
        className={`d-flex flex-column align-items-center ${
          selected === 3 ? classes.active : classes.un_active
        }`}
      >
        <h4>Soft Drinks</h4>
        <img
          className="p-1 shadow-md"
          style={styles.image}
          src="assets/soft-drinks.png"
          width={40}
        />
      </div>
    </div>
  );
}
