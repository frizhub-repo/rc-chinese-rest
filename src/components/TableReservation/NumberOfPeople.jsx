import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  count: {
    width: "50px",
    height: "51px",
    borderRadius: "250px",
    fontSize: "25px",
    textAlign: "center",
    paddingTop: "6px",
    marginBottom: "5px",
    cursor: "pointer",
  },
  activeNumber: {
    color: "#fff",
    background: "rgba(251, 191, 36)",
  },
  number: {
    color: "#000",
    background: "rgba(213, 221, 235)",
  },
});

const NumberOfPeople = ({ setNumber, number }) => {
  const classes = useStyles();
  return (
    <Grid container>
      {[...Array(9).keys()].map((i) => (
        <Grid md={4} className={classes.container}>
          <Box
            className={`${classes.count} ${
              i + 1 === number ? classes.activeNumber : classes.number
            }`}
            onClick={() => setNumber(i + 1)}
          >
            {i + 1}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default NumberOfPeople;
