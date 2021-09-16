import React from "react";
import classes from "./MenuSelector.module.css";

export default function MenuSelector({ activeStep, setActiveStep }) {
  const menus = [
    "Account",
    "Order History",
    "Customization",
    "Settings",
    "Log Out",
  ];
  return (
    <div>
      <ul className={classes.container}>
        {menus.map((menu, index) => (
          <li
            className={`${classes.item} ${activeStep === index && classes.item_active
              }`}
            onClick={() => setActiveStep(index)}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
}
