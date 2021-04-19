import React, { useState } from "react";
import Navbar from "../Navbar";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CreditCard from "./CreditCard";

const useStyles = makeStyles({
  root: {
    marginTop: "10%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "30px",
    textAlign: "left",
  },
  activeText: {
    background: "rgba(251, 191, 36)",
    color: "#fff",
    padding: "6px 20px 6px 20px",
    marginRight: "20px",
    borderRadius: "30px",
  },
  text: {
    border: "1px solid rgba(251, 191, 36)",
    color: "#000",
    padding: "6px 20px 6px 20px",
    borderRadius: "30px",
    marginRight: "20px",
  },
});

const Index = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Navbar />
      <Box className={classes.root}>
        <Box className={classes.container}>
          <strong className={classes.title}>How do you want to pay</strong>
          <Box display="flex" mt="20px">
            <label
              className={activeTab === 0 ? classes.activeText : classes.text}
              onClick={() => setActiveTab(0)}
            >
              Credit Card
            </label>
            <label
              className={activeTab === 1 ? classes.activeText : classes.text}
              onClick={() => setActiveTab(1)}
            >
              Paypal
            </label>
            <label
              className={activeTab === 2 ? classes.activeText : classes.text}
              onClick={() => setActiveTab(2)}
            >
              Cash on Delivery
            </label>
          </Box>
        </Box>
        {activeTab === 0 && <CreditCard />}
      </Box>
    </div>
  );
};

export default Index;
