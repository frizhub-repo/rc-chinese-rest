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
import CardMedia from "@material-ui/core/CardMedia";
import MenuCard from "../Home/MenuCard";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import foodimage from "../../images/foodimage.jpg";
import likeIcon from "../../images/likeIcon.png";
import FourFiveIcon from "../../images/FourFiveIcon.png";
import comment from "../../images/comment.png";
import FourTwoSeven from "../../images/427.png";
import Menu from "../../images/menu.png";
import map from "../../images/map.jpg";
import euro from "../../images/euro.png";
import clock from "../../images/clock.png";
import like from "../../images/like.png";
import chat from "../../images/chat.png";
import ImageAvatars from "../Avatar/Avatar";
import user from "../../images/user.png";
import Logo from "../../images/CLogo.png";

function TableReservation() {
  const { restaurant } = useRestaurantContext();

  const classes = useStyles();
  const history = useHistory();
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

      <div className={classes.divClass}>
        <div className={classes.courseCardDiv}>
          <div className={classes.tableReserve2}>
            <div>
              <TimingsCard
                id="3"
                open="true"
                textForOpen="Keep in touch with us"
                styles={`${classes.root5} ${classes.extraStyleForC9}`}
                textStyles={classes.textStyles}
              />
            </div>
            <Card className={`${classes.root5} ${classes.extraStyleForC10}`}>
              <CardContent></CardContent>
            </Card>
          </div>
          <div className={classes.headerStyles}>
            <TimingsCard
              id="3"
              open="true"
              textForOpen="DAILY MENU"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStylesForRadius2}`}
              textStyles={classes.textStyles}
            />
            <TimingsCard
              id="3"
              open="true"
              textForOpen="PROMOTIONS"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStyleForRadius3}`}
              textStyles={classes.textStyles}
            />
            <TimingsCard
              id="3"
              open="true"
              textForOpen="INFO"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStylesForRadius}`}
              textStyles={classes.textStyles}
            />
          </div>
          <Card
            className={`${classes.root5} ${classes.extraStyle3} ${classes.rStyles}`}
          >
            <CardContent>
              <div className={classes.coursesStyles}>
                <div className={classes.container}>
                  <MenuCard text="FIRST COURSE" />
                </div>
                <div className={classes.container}>
                  <MenuCard text="SECOND COURSE" />
                </div>
                <div>
                  <Card
                    className={`${classes.root5} ${classes.screenStyles} ${classes.bookButtonClss2}`}
                    onClickHandler={() => history.push("/menu")}
                  >
                    <CardContent className={classes.flexOne}>
                      <img className={classes.bookImage} src={Menu} />
                      <Typography
                        className={`${classes.newTextStyles2} ${classes.nTS2}`}
                      >
                        CHECK ALSO OUR MENU!
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={classes.tableReserve}>
          <div>
            <Card
              className={`${classes.root5} ${classes.extraStyle} ${classes.stStyles}`}
            >
              <CardContent>
                <img src={reservationBook} className={classes.bookStyles} />

                <Typography className={classes.typoStyles}>
                  RESERVE A TABLE
                </Typography>
              </CardContent>
            </Card>
          </div>
          <Card className={`${classes.root5} ${classes.extraStyle2}`}>
            <CardContent>
              <div className={classes.iconsDiv}>
                <Card className={classes.resSmallCards}>
                  <div className={classes.likeIconDiv}>
                    <img src={likeIcon} className={classes.likeIcon} />
                    <img src={FourFiveIcon} className={classes.fourFiveIcon} />
                  </div>
                </Card>
                <Card className={classes.resSmallCards}>
                  <div className={classes.likeIconDiv}>
                    <img src={comment} className={classes.likeIcon} />
                    <img src={FourTwoSeven} className={classes.numberIcon} />
                  </div>
                </Card>
                <Card className={classes.resSmallCards}>
                  {" "}
                  <img src={euro} className={classes.euroIcon} />
                </Card>
              </div>
              <div className={`${classes.container4} ${classes.extra}`}>
                <Card className={`${classes.root2} ${classes.firstone}`}>
                  <CardContent>
                    <div className={classes.img}>
                      <img src={clock} />
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <div>
                    <TimingsCard
                      id="2"
                      startTime="9:00am"
                      endTime="2:00pm"
                      open="true"
                      styles={`${classes.root4} ${classes.firstone}`}
                    />
                  </div>
                  <div>
                    <TimingsCard
                      id="3"
                      open="true"
                      textForOpen="Click for Opening Hours"
                      styles={`${classes.root6} ${classes.firsttwo}`}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.textStyles}>
                <h3>CI CHO SAN</h3>
                <br />
                <p className={classes.pStyles}>
                  Piazza Mentana, 2, 50122 Firenze FI
                </p>
              </div>
              <CardMedia className={classes.media4} image={map} />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={classes.textDivStyles}>
        <div className={classes.avatarStyles}>
          <img className={classes.img22} src={Logo} />
        </div>

        <div className={classes.h1Styles}>
          <h3>THIS RESTAURANT GAINED A REPUTATION OF</h3>
          <div className={classes.imgDivContainer}>
            <img src={like} className={classes.imgStyles} />
            <p className={classes.getStars}>4</p>
            <p className={classes.getStarsSlash}>|</p>5
          </div>

          <div className={classes.imgDivContainer}>
            WITH
            <img src={chat} className={classes.imgStyles} />
            781 REVIEWS
          </div>
          <div className={classes.cardContainer}>
            <Card className={` ${classes.extraStyleForRoot}`}>
              <CardContent className={classes.cardContentStyles}>
                <div className={classes.avatarDivStyles}>
                  <ImageAvatars img={user} />
                  <div className={classes.forflex}>
                    <div
                      className={`${classes.h1Styles} ${classes.divNewStyles}`}
                    >
                      <p>VOTED</p>
                    </div>
                    <div className={`${classes.imgDivContainer} `}>
                      <img src={like} className={classes.imgStyles} />
                      <p className={classes.getStars}>4</p>
                      <p className={classes.getStarsSlash}>|</p>5
                    </div>
                  </div>
                </div>

                <div className={classes.lineStyles2}></div>

                <p>
                  ‘’E’ il mio ristorante preferito a Pisa. Andateci e non ve ne
                  pentirete!!! I piatti sono buonissimi ed in più il personale è
                  gentile. Super consigliato, noi appena possiamo (data la
                  pandemia) ci torniamo con piacere’’
                </p>
              </CardContent>
            </Card>
            <br />
            <Card className={classes.extraStyleForRoot}>
              <CardContent className={classes.cardContentStyles}>
                <div className={classes.avatarDivStyles}>
                  <ImageAvatars img={user} />
                  <div className={classes.forflex}>
                    <div
                      className={`${classes.h1Styles} ${classes.divNewStyles}`}
                    >
                      <p>VOTED</p>
                    </div>
                    <div className={`${classes.imgDivContainer} `}>
                      <img src={like} className={classes.imgStyles} />
                      <p className={classes.getStars}>4</p>
                      <p className={classes.getStarsSlash}>|</p>5
                    </div>
                  </div>
                </div>

                <div className={classes.lineStyles2}></div>

                <p>
                  ‘’E’ il mio ristorante preferito a Pisa. Andateci e non ve ne
                  pentirete!!! I piatti sono buonissimi ed in più il personale è
                  gentile. Super consigliato, noi appena possiamo (data la
                  pandemia) ci torniamo con piacere’’
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
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
