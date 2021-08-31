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

export default function MenuSelector({
  selectedMenu,
  activeSection,
  handleChangeSectionIndex,
}) {
  return (
    <div className="d-flex justify-content-center">
      {selectedMenu?.map((item, index) => (
        <div
          onClick={() => handleChangeSectionIndex(index)}
          style={styles.option}
          className={`d-flex flex-column align-items-center ${
            activeSection === index ? classes.active : classes.un_active
          }`}
        >
          <h4>{item?.category?.name}</h4>
          <img
            className="p-1 shadow-md"
            style={styles.image}
            src="assets/first-course.png"
            width={40}
          />
        </div>
      ))}
    </div>
  );
}
