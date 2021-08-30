import React, { useState } from "react";
import classes from "./MenuType.module.css";

const styles = {
  container: {
    background: "#280813",
    borderRadius: "0px 20px 20px 0px",
  },
  item: {
    borderTop: "1px solid white",
    cursor: "pointer",
  },
  hotDeal: {
    position: "relative",
    cursor: "pointer",
  },
  hotDealIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    background: "white",
    borderRadius: "0 20px",
  },
};

export default function MenuType({ selected, handleClick }) {
  const [items, setItems] = useState([
    "Newest Deals",
    "Menu 1",
    "Menu 2",
    "Menu 3",
  ]);
  return (
    <ul style={styles.container} className="shadow-lg">
      <li
        onClick={(e) => handleClick(0)}
        style={styles.hotDeal}
        className={`${
          selected === 0 && classes.active
        } p-2 d-flex justify-content-between`}
      >
        Hot Deals
        <img style={styles.hotDealIcon} src="assets/flames.png" width={37} />
      </li>
      {items.map((item, index) => (
        <li
          onClick={(e) => handleClick(index + 1)}
          style={styles.item}
          className={`p-3 ${selected === index + 1 && classes.active}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
