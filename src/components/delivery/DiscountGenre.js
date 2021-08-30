import React, { useState } from "react";
import classes from "./DiscountGenre.module.css";

const useStyle = () => ({
  container: {
    margin: "30px 0px",
  },
});

const options = ["Bundle", "Flat", "%"];
export default function DicountGenre({ selected, handleClick }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <div className="d-flex justify-content-center">
        {options.map((option, index) => (
          <div
            onClick={(e) => handleClick(index)}
            className={`${classes.option} ${
              selected === index
                ? classes.option_active
                : classes.option_un_active
            }`}
          >
            <h3>{option}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
