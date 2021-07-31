import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import About from "../About";
import UserPhotos from "../UserPhotos";
import Carousel from "react-multi-carousel";
import Card from "@material-ui/core/Card";

import moduleName from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Box, CircularProgress } from "@material-ui/core";
import NumberOfPeople from "./NumberOfPeople";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import TimePicker from "react-time-picker";
import ServiceButton from "./ServiceButton";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { reserveTable } from "../../api/customers";
import SuccessModal from "./SuccessModal";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Link } from "react-router-dom";
import HeroCard from "../Home/HeroCard";
import reservationBook from "../../images/reservationBook.png";
import CardContent from "@material-ui/core/CardContent";
import TimingsCard from "../Home/timingsCard";
import { useStyles } from "../Home/MainStyles";

function TableReservation() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [number, setNumber] = useState(3);
  const [selectedDay, setSelectedDay] = useState(Date.now());
  const [time, setTime] = useState("12:00:00");
  const [services, setServices] = useState("lunch");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { token } = useRestaurantContext();

  var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
  dayjs.extend(isSameOrBefore);

  const tableReserve = async () => {
    try {
      const formatDate = dayjs(selectedDay).format("YYYY-MM-DD");
      if (
        !dayjs(dayjs().format("YYYY-MM-DD")).isSameOrBefore(dayjs(formatDate))
      ) {
        toast.error("Please provide correct date");
      } else {
        setLoading(true);
        const res = await reserveTable({
          startTime: formatDate + " " + time,
          numberOfPeople: number,
          services: services,
        });
        setLoading(false);
        handleShow();
      }
    } catch (error) {
      toast.error("Table Reservation is not available at the moment!");
      setLoading(false);
      console.log({ error });
    }
  };

  const modifiers = {
    highlighted: selectedDay,
  };

  const modifiersStyles = {
    highlighted: {
      color: "white",
      backgroundColor: "#ffc107",
    },
  };

  var scrollTo = function (ele) {
    let offsetTop = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.mainDiv}>
      <Navbar selected="Res" />
      <div
        className="mt-0 flex pl-36 items-center  h-96 justify-content-center"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1452967712862-0cca1839ff27?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80) center center",
        }}
      >
        <HeroCard />
      </div>
      <div className={classes.whiteCircle}>
        <img className={classes.wImg} src={reservationBook} />
        <p>RESERVE A TABLE</p>
      </div>

      <div className={classes.tableReserve2}>
        <div>
          <TimingsCard
            id="3"
            open="true"
            textForOpen="LUNCH MENU"
            styles={`${classes.root5} ${classes.extraStyleForC7}`}
            textStyles={classes.textStyles}
          />
        </div>
        <Card className={`${classes.root5} ${classes.extraStyleForC8}`}>
          <CardContent></CardContent>
        </Card>
      </div>
      <Footer />
      {/* <SuccessModal
        show={show}
        handleClose={handleClose}
        date={selectedDay}
        time={time}
        peopleCount={number}
      /> */}
    </div>
  );
}

export default TableReservation;
