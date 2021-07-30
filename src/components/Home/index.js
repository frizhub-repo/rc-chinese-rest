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
            <h3 className={classes.headingStyles}>SOMETHING ABOUT US</h3>
            <p className={classes.paraStyles}>
              Meals are generally served and eaten on the premises, but many
              restaurants also offer take-out and food delivery services.
              Restaurants vary greatly in apparance and offerings, including a
              wide variety of cuisines and services models ranging from
              inexpensive fast food restaurants and cafeterias, to mid-priced
              family restaurants, to high-priced luxury establishments.
            </p>
          </div>
          <div className={`col-6 mt-10`}></div>
          <div className={`col-6 mt-10`}>
            <img src={productImg} alt="" className={classes.roundedCircle} />
          </div>

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
                  textForOpen="Keep in touch with us"
                  styles={`${classes.root5} ${classes.extraStyleForC7}`}
                  textStyles={classes.textStyles}
                />
              </div>
              <Card className={`${classes.root5} ${classes.extraStyleForC8}`}>
                <CardContent></CardContent>
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
            {openingHours.length ? (
              <div className={classes.flexDisplay}>
                <div className={classes.mainDiv}>
                  <Card className={`${classes.timingCardStyles2} `}>
                    <CardContent className={classes.timingCardContect2}>
                      <div className={classes.img2}>
                        <img src={clock} />
                      </div>
                      <Typography className={classes.typoStyles4}>
                        OPENING HOURS
                      </Typography>
                    </CardContent>
                  </Card>
                  <div className={classes.container2}>
                    {/* <div>
              <Card
                className={`${classes.timingCardStyles} ${classes.addStyles}`}
              >
                <CardContent className={classes.timingCardContect}>
                  <Typography className={classes.typoStyles4}>NAME</Typography>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card
                className={`${classes.timingCardStyles} ${classes.addStyles}`}
              >
                <CardContent className={classes.timingCardContect}>
                  <Typography className={classes.typoStyles4}>NAME</Typography>
                </CardContent>
              </Card>
            </div> */}
                    {openingHours.map((item) => (
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
                <CardMedia
                  className={classes.media3}
                  image={map}
                  style={{ marginBottom: "30px" }}
                />
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
