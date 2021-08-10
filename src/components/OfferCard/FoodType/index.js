import React from "react";
import { Typography } from "@material-ui/core";

const FoodCard = ({ title, isSelected, classes }) => {
  return (
    <div
      className={
        isSelected
          ? classes.additionalInfo
          : `${classes.additionalInfo} ${classes.op}`
      }
    >
      <Typography
        style={{ marginLeft: "8px", fontWeight: "500", fontSize: "9px" }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default FoodCard;
