import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HeroCard from "./HeroCard";
import Footer from "../../Footer";
import { getGoogleMyBusinessLocations } from "../../api/public";
import { useStyles } from "./MainStyles";
import productImg from "../../images/productImg.jpeg";
import CardMedia from "@material-ui/core/CardMedia";
import map from "../../images/map.jpg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ImageAvatars from "../Avatar/Avatar";
import user from "../../images/user.png";
import TimingsCard from "../Home/timingsCard";
import delivery from "../../images/delivery.png";
import reservationBook from "../../images/reservationBook.png";
import { useHistory } from "react-router-dom";
import Menu from "../../images/menu.png";
import clock from "../../images/clock.png";
import rating from "../../images/rating.png";
import Reservation from "../../images/reservation.png";
import mapIcon from "../../images/map.png";
import CardMenu from "./cardMenu";

const periods = [
  {
    openDay: "MONDAY",
    openTime: "10:00",
    closeDay: "MONDAY",
    closeTime: "20:00",
  },
  {
    openDay: "TUESDAY",
    openTime: "10:00",
    closeDay: "TUESDAY",
    closeTime: "20:00",
  },
  {
    openDay: "WEDNESDAY",
    openTime: "10:00",
    closeDay: "WEDNESDAY",
    closeTime: "20:00",
  },
  {
    openDay: "THURSDAY",
    openTime: "10:00",
    closeDay: "THURSDAY",
    closeTime: "20:00",
  },
  {
    openDay: "FRIDAY",
    openTime: "10:00",
    closeDay: "FRIDAY",
    closeTime: "20:00",
  },
];

function Home() {
  const classes = useStyles();
  const [openingHours, setOpeningHours] = useState([]);

  useEffect(() => {
    const getGMBLocation = async () => {
      try {
        const res = await getGoogleMyBusinessLocations();
        setOpeningHours(res?.data?.regularHours?.periods);
      } catch (error) {
        console.log(error);
      }
    };
    getGMBLocation();
  }, []);

  const history = useHistory();

  return (
    <div>
      <Navbar selected={"Home"} />
      <div className="container">
        <div className="row row-offset-12">
          <div className="col-md-6 mt-20">
            <HeroCard />
          </div>
          <div className="col-md-6 mt-20 mb-10">
            <h3 className={classes.nheadingStyles}>SOMETHING ABOUT US</h3>
            <p className={classes.paraStyles}>
              Meals are generally served and eaten on the premises, but many
              restaurants also offer take-out and food delivery services.
              Restaurants vary greatly in apparance and offerings, including a
              wide variety of cuisines and services models ranging from
              inexpensive fast food restaurants and cafeterias, to mid-priced
              family restaurants, to high-priced luxury establishments.
            </p>
          </div>
          <div className={`col-md-6 mt-10`}>
            <div className={classes.cornerDiv}>
              <div className={classes.left}>
                <div className={classes.innerDivStyles1}>
                  <p className=" text-white text-center text-sm">
                    Table Reservation
                  </p>
                  <img
                    className="h-16 object-contain  w-full"
                    src={Reservation}
                  />

                  <p className=" text-white text-center mt-2 text-sm">
                    20 Seats Available
                  </p>
                </div>
                <div className={classes.innerDivStyles2}>
                  <p className=" text-white text-center text-sm">Address</p>
                  <img
                    className="object-contain mt-2 w-full h-16 "
                    src={mapIcon}
                  />

                  <p className=" text-white text-center mt-2 text-sm">
                    Via Cristoforo Colombo,44
                  </p>
                </div>
              </div>
              <div className={classes.imgAndText}>
                <img className={classes.btImgStyles} src={clock} />
                <h3 className={classes.btHeader}>Now Opened</h3>
                <br />
                <p>From 12:00 - To 15:30</p>
                <div className={classes.orderPipe}>ORDER NOW</div>
                <div className={classes.openPipe}>Click for Opening Hours</div>
              </div>
              <div className={classes.right}>
                <div className={classes.innerDivStyles3}>
                  <p className=" text-white text-center text-sm">Delivery</p>
                  <img className="h-16 object-contain  w-full" src={delivery} />

                  <p className=" text-white text-center mt-2 text-sm">
                    Minimum Order 15$
                  </p>
                </div>
                <div className={classes.innerDivStyles4}>
                  <p className=" text-white text-center text-sm">Reviews</p>
                  <img className="object-contain  w-full h-16" src={rating} />
                  <p className=" text-white text-center mt-2 text-sm">
                    22 Satisfid clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-md-6 mt-10`}>
            <img src={productImg} alt="" className={classes.roundedCircle} />
          </div>
          <div className={`col-12 mt-10 ${classes.picCard}`}></div>
          <div className={classes.flexOne}>
            <div className={classes.circleButton}>
              <div className={classes.imageDiv}>
                <img src={reservationBook} className={classes.img} />
              </div>
            </div>
            <div className={classes.tableReserve2}>
              <div>
                <TimingsCard
                  id="3"
                  open="true"
                  textForOpen="OUR MENU SELECTION"
                  styles={`${classes.root5} ${classes.extraStyleForC7}`}
                  textStyles={classes.textStyles}
                />
              </div>
              <Card className={`${classes.root5} ${classes.extraStyleForC8}`}>
                <CardContent>
                  <CardMenu />
                </CardContent>
              </Card>
            </div>
            <div className={classes.circleButton}>
              <div className={classes.imageDiv}>
                <img src={delivery} className={classes.img} />
              </div>
            </div>
          </div>

          <div className="col-12 mt-10">
            <div className={classes.containerTwo}>
              <div>
                <Card
                  className={`${classes.root5} ${classes.screenStyles} ${classes.bookButtonClss}`}
                  onClickHandler={() => history.push("/menu")}
                >
                  <CardContent className={classes.flexOne}>
                    <img className={classes.bookImage} src={Menu} />
                    <Typography className={classes.newTextStyles}>
                      CHECK ALSO OUR MENU!
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-6 mt-10  mb-4">
            {periods.length ? (
              <div className={classes.flexDisplay}>
                <div className={classes.mainDiv}>
                  <Card className={`${classes.timingCardStyles2} `}>
                    <CardContent className={classes.timingCardContect2}>
                      <div className={classes.img2}>
                        <img src={clock} />
                      </div>
                    </CardContent>
                  </Card>
                  <div className={classes.GridContainer}>
                    <div>
                      <Card
                        className={`${classes.timingCardStyles} ${classes.addStyles}`}
                      >
                        <CardContent className={classes.timingCardContect}>
                          <Typography className={classes.typoStyles4}>
                            SUNDAY
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card
                        className={`${classes.timingCardStyles} ${classes.addStyles}`}
                      >
                        <CardContent className={classes.timingCardContect}>
                          <Typography className={classes.typoStyles4}>
                            CLOSED
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                    {periods.map((item) => (
                      <>
                        <div>
                          <Card className={classes.timingCardStyles}>
                            <CardContent className={classes.timingCardContect}>
                              <Typography className={classes.typoStyles4}>
                                {item?.openDay}
                              </Typography>
                            </CardContent>
                          </Card>
                        </div>
                        <div>
                          <Card className={classes.timingCardStyles}>
                            <CardContent className={classes.timingCardContect}>
                              <Typography className={classes.typoStyles4}>
                                {item?.openTime} - {item?.closeTime}
                              </Typography>
                            </CardContent>
                          </Card>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={`col-6 mt-10  mb-4`}>
            <Card className={classes.root7}>
              <CardContent className={classes.cardContentStyles}>
                <div className={classes.avatarDivStyles}>
                  <ImageAvatars img={user} />
                </div>

                <div className={classes.lineStyles}></div>

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
      <div className="flex mt-0 h-96 w-50 mb-10 border-10">
        <div className="w-1/2   p-0">
          <iframe
            width="100%"
            height="100%"
            className=" w-full h-full object-cover "
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ height: "100%", width: "100%" }}
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Home;
