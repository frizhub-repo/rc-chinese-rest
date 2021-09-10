import React from "react";
import classes from "./MenuType.module.css";

const styles = {
  container: {
    background: "#280813",
    borderRadius: "0px 20px 20px 0px",
    maxHeight: "300px",
    overflowY: "scroll",
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

export default function MenuType({ menus, selected, handleClick }) {
  return (
    <div style={styles.container} className="custom-scroll">
      <ul className="shadow-lg">
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
        {menus.length > 0 &&
          menus.map((menu, index) => (
            <li
              onClick={(e) => handleClick(index + 1)}
              style={styles.item}
              className={`p-3 d-flex ${
                selected === index + 1 && classes.active
              }`}
            >
              {menu?.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
