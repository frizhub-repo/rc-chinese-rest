import React from "react";
import { makeStyles } from "@material-ui/styles";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import WizardProcess from "./WizardProcess";
import { Box, Grid, Card, Button } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import Tables from "./Tables";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  time: {
    marginTop: "2rem",
    fontSize: "2.5rem",
    color: "#ffc438",
    fontWeight: "700",
  },
  timeDescription: {
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  imgContainer: {
    marginTop: "3rem",
    display: "flex",
    justifyContent: "center",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginLeft: "1rem",
    fontFamily: "roboto",
  },
  detail: {
    display: "flex",
    justifyContent: "space-between",
    padding: "3rem 1rem 0rem 3rem",
    fontFamily: "roboto",
  },
  imgContainer1: {
    height: "300px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("https://images.grandsierraresort.com/image/upload/q_auto,f_auto,w_450,c_scale/c_limit,w_1280/v1561401266/Grand-Cafe-food-hero.png")`,
  },
  statements: {
    fontSize: "10px",
    marginBottom: "0px",
    fontWeight: "400",
  },
  bannerCtn: {
    display: "flex",
    background: "#ffc438",
    color: "white",
    justifyContent: "center",
    height: "200px",
    alignItems: "center",
    fontFamily: "roboto",
  },
});

function OrdersReceived() {
  const classes = useStyles();
  const total = useSelector((state) => state.orders).total;
  const products = useSelector((state) => state.orders).products;
  const time = useSelector((state) => state.orders).time;
  const note = useSelector((state) => state.orders).note;
  const address = useSelector((state) => state.orders).address;

  return (
    <>
      <Navbar />
      <WizardProcess />
      <div className={classes.time}>18:30</div>
      <div className={classes.timeDescription}>You requested delivery for</div>
      <Grid xs={8} md={8} lg={8}>
        <Box className={classes.imgContainer}>
          <img
            src="https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=6&m=1211547141&s=612x612&w=0&h=tIxhZMe51y8LcqcX6u3h0WXDERaxTfuZnqwa9WfvIqw="
            alt="cafe interior"
            width="250"
            height="250"
          />
          <div className={classes.itemContainer}>
            <label
              style={{ fontSize: "2rem", fontWeight: "600", marginTop: "2rem" }}
            >
              Starters Cafe
            </label>
            <label style={{ fontSize: "1.5rem", color: "grey" }}>
              Chinese / Thai
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LocationOnIcon
                style={{
                  height: "30px",
                  width: "30px",
                  marginBottom: "10px",
                  color: "#cadafa",
                }}
              />
              <label style={{ fontSize: "1.5rem", color: "grey" }}>
                135 New town wards Roads, Belfast, Bt4
              </label>
            </div>
          </div>
        </Box>
      </Grid>
      <Grid xs={8} md={8} lg={8}>
        <Box className={classes.detail}>
          <label style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Order Detail
          </label>
          <label
            style={{ fontSize: "1.1rem", fontWeight: "500", color: "#fc853a" }}
          >
            Total: {total} €
          </label>
        </Box>
      </Grid>
      <Grid item container spacing={1}>
        <Grid item xs={8} md={8} lg={8}>
          <Box style={{ padding: "0rem 1rem 3rem 3rem" }}>
            <Tables products={products} total={total} />
          </Box>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Card
            style={{
              height: "179px",
              marginRight: "3rem",
              borderRadius: "30px",
              border: "1px solid #e6fbff",
            }}
          >
            <Box style={{ display: "flex" }}>
              <div
                style={{
                  height: "179px",
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <MyLocationIcon style={{ height: "40px", width: "40px" }} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <label style={{ fontWeight: "500", fontSize: "20px" }}>
                  Delivery Address
                </label>
                <label
                  style={{
                    fontSize: "10px",
                    marginBottom: "0px",
                    fontWeight: "400",
                  }}
                >
                  WEST GARDA HOTEL, Via Prais, Padhenge sul
                </label>
                <label style={{ fontSize: "10px", fontWeight: "400" }}>
                  Varda, Province of Brescia, italy
                </label>
              </div>
            </Box>
          </Card>
          <Card
            style={{
              height: "179px",
              marginTop: "1rem",
              marginRight: "3rem",
              borderRadius: "30px",
              border: "1px solid #e6fbff",
            }}
          >
            <Box style={{ display: "flex" }}>
              <div
                style={{
                  height: "179px",
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <EventNoteRoundedIcon
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <label style={{ fontWeight: "500", fontSize: "20px" }}>
                  Your Message
                </label>
                <label className={classes.statements}>
                  WEST GARDA HOTEL, Via Prais, Padhenge sul
                </label>
                <label className={classes.statements}>
                  lorem ipsum odor dfsfds fdsfds sdffddsf
                </label>
                <label className={classes.statements}>
                  lorem ipsum odor dfsfds fdsfds sdffddsf
                </label>
                <label className={classes.statements}>
                  lorem ipsum odor dfsfds fdsfds sdffddsf
                </label>
              </div>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Box className={classes.bannerCtn}>
        <label
          style={{ fontWeight: "700", marginRight: "10px", fontSize: "20px" }}
        >
          Do you need help?
        </label>
        <label style={{ fontWeight: "500", fontSize: "20px" }}>
          Call the restaurant at 3555549
        </label>
        <a
          href="https://www.google.com"
          style={{ marginLeft: "10px", marginBottom: "0.5rem", color: "white" }}
        >
          <u>Check our dedicated section</u>
        </a>
      </Box>
      <Grid item container>
        <Grid item md={7} lg={7}>
          <Grid item container>
            <Grid item md={3} lg={3}></Grid>
            <Grid
              item
              md={6}
              lg={6}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                <label>Follow us</label>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <label style={{ display: "flex" }}>
                  lorem ipsum dolor sitt amet, consteurer sadipir elitr, sed
                </label>
                <label style={{ display: "flex" }}>
                  lorem ipsum dolor sitt amet, consteurer sadipir elitr, sed
                </label>
                <label style={{ display: "flex" }}>
                  lorem ipsum dolor sitt amet, consteurer sadipir elitr, sed
                </label>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    minWidth: "100px",
                  }}
                >
                  <FacebookIcon style={{ height: "36px", width: "36px" }} />
                  <TwitterIcon style={{ height: "36px", width: "36px" }} />
                  <InstagramIcon style={{ height: "36px", width: "36px" }} />
                </div>
                <div style={{ marginRight: "40px" }}>
                  <Button
                    style={{
                      border: "1px solid #ffc438",
                      borderRadius: "30px",
                      color: "#ffc438",
                      width: "200px",
                    }}
                  >
                    Jump to Home
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item md={3} lg={3}></Grid>
          </Grid>
        </Grid>
        <Grid item md={5} lg={5}>
          <div style={{ marginBottom: "60px" }}>
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="man using laptop"
            />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default OrdersReceived;
