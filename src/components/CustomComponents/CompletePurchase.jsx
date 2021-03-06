import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import axiosIntance from "../../axios-configured";
import Navbar from "../Navbar";
import { removeOrderItems } from "../../actions";

export default function CompletePurchase() {
  const paypal = useRef();
  const disp = useDispatch();
  const history = useHistory();
  const [status, setStatus] = useState(null);
  const total = useSelector((state) => state.orders).total;
  const products = useSelector((state) => state.orders).products;

  const createOrder = () => {
    // if (status === "ERROR") {
    //   toast.error("Payment cancel for some reason. Please provide payment");
    // } else if (status === "COMPLETED") {
    //   setStatus(null);
    //   axiosIntance
    //     .post("/api/v1/orders/customers", { products: items })
    //     .then((res) => {
    //       toast.success("Order created successfully");
    //       disp(removeOrderItems());
    //       history.push("/");
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
    // } else {
    //   toast.error("Payment not added. Please provide payment");
    // }
    axiosIntance
      .post("/api/v1/orders/customers", { products })
      .then((res) => {
        toast.success("Order created successfully");
        disp(removeOrderItems());
        history.push("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    var FUNDING_SOURCES = [
      window.paypal.FUNDING.PAYPAL,
      window.paypal.FUNDING.PAYLATER,
      window.paypal.FUNDING.CREDIT,
      window.paypal.FUNDING.CARD,
    ];

    FUNDING_SOURCES.forEach(function (fundingSource) {
      // Initialize the buttons
      var button = window.paypal.Buttons({
        style: {
          shape: "pill",
          layout: "horizontal",
          margin: "20px",
        },
        fundingSource: fundingSource,
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Restaurant Club",
                amount: {
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order?.status === "COMPLETED") {
            // toast.success("Payment got successfull");
            setStatus("COMPLETED");
            createOrder();
          } else {
            setStatus("ERROR");
            toast.error("Something went wrong");
          }
          console.log({ order });
        },
        onError: (err) => {
          setStatus("ERROR");
          toast.error("Error occured while sending money");
          console.log({ err });
        },
        onCancel: (data) => {
          setStatus("ERROR");
          toast.error("Payment cancel by user");
          console.log({ data });
        },
      });

      // Check if the button is eligible
      if (button.isEligible()) {
        // Render the standalone button for that funding source
        button.render(paypal.current);
      }
    });
    // Add style on paypal buttons at run time
    let content = document.getElementsByClassName(
      "paypal-buttons-layout-horizontal"
    );
    for (let i = 0; i < content.length; i++) {
      content[i].style.margin = "5px";
      content[i].style.width = "100%";
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ marginTop: "50px" }}
      >
        <Grid item>
          <Typography variant="h6" gutterBottom>
            How do you want to pay?
          </Typography>
        </Grid>
        <Grid item justify="flex-end">
          Total amount: ${total}
        </Grid>
        <Grid item>
          <div ref={paypal} style={{ display: "flex" }}></div>
        </Grid>
        {/* <Grid item>
          <Button
            style={{
              borderRadius: "15px",
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
              padding: "4px 6px 4px 6px",
            }}
            onClick={createOrder}
          >
            Complte Purchase
          </Button>
        </Grid> */}
      </Grid>
    </div>
  );
}
