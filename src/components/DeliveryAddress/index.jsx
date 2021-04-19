import React from "react";
import Navbar from "../Navbar";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Address from "./Address";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "40px",
    paddingBottom: "50px",
  },
});

const Index = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />

      <Box className={classes.container}>
        <Address />
      </Box>
    </div>
  );
};

export default Index;
