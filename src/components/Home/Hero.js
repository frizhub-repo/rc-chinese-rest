import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  someThing: {
    fontSize: "46px",
    fontWeight: "bolder",
  },
  lead: {
    fontSize: "1.25rem",
    fontWeight: "300",
    marginTop: "15px",
  },
  container: {
    paddingTop: "140px",
  },
  textContainer: {
    color: "#F49E0B",
    paddingInline: "50px",
  },
});

export default function Hero() {
  const classes = useStyles();

  return (
    <div
      className={`row d-flex align-items-center justify-content-center ${classes.container}`}
    >
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img src="assets/hero.png" width={400} alt="Hero" />
      </div>
      <div className={`col col-md-6 ${classes.textContainer}`}>
        <h1 className={classes.someThing}>SOMETHING ABOUT US</h1>
        <p className={classes.lead}>
          Meals are generally served and eaten on the premises, but many
          restaurants also offer take-out and food delivery services.
          Restaurants vary greatly in apparance and offerings, including a wide
          variety of cuisines and services models ranging from inexpensive fast
          food restaurants and cafeterias, to mid-priced family restaurants, to
          high-priced luxury establishments.
        </p>
      </div>
    </div>
  );
}
