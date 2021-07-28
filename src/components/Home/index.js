import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HeroCard from "./HeroCard";
import Footer from "../../Footer";
import UserPhotos from "../UserPhotos";
import About from "../About";
import { getGoogleMyBusinessLocations } from "../../api/public";
import { useStyles } from "./MainStyles";
import productImg from "../../images/productImg.jpeg";

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

  return (
    <div>
      <Navbar selected={"Home"} />
      <div className="container">
        <div className="row row-offset-12">
          <div className="col-md-6 mt-20">
            <HeroCard />
          </div>
          <div className="col-md-6 mt-20">
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

          <div className="col-6 mt-10">
            {" "}
            <HeroCard />
          </div>
          <div className={`col-sm-6 mt-10 ${classes.roundedImage}`}>
            <img src={productImg} className="rounded-circle" />
          </div>
        </div>
      </div>

      <div className="flex mt-0 h-96">
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
        <div className="w-1/2 bg-yellow-400 p-12">
          <h1 className="font-old text-4xl">Opening Days</h1>
          <h1 className=" text-3xl">We'll be available</h1>
          <div>
            {openingHours.length > 0 &&
              openingHours.map((item) => (
                <div className="flex w-full justify-content-between   ">
                  <p className="text-left flex-grow text-lg font-weight-bold font-old">
                    {item?.openDay}
                  </p>
                  <p className="text-right text-white">
                    {item?.openTime} - {item?.closeTime}
                  </p>
                </div>
              ))}
            {/* <div className="flex w-full justify-content-between   ">
              <p className="text-left flex-grow text-lg font-weight-bold font-old">
                Monday
              </p>
              <p className="text-right text-white">09:00-20:00</p>
            </div>
            <div className="flex w-full justify-content-between  ">
              <p className="text-left flex-grow text-lg font-weight-bold font-old">
                Tuesday
              </p>
              <p className="text-right text-white">09:00-20:00</p>
            </div>
            <div className="flex w-full justify-content-between  ">
              <p className="text-left flex-grow text-lg font-weight-bold font-old">
                Wednesday
              </p>
              <p className="text-right text-white">09:00-20:00</p>
            </div>
            <div className="flex w-full justify-content-between  ">
              <p className="text-left flex-grow text-lg font-weight-bold font-old">
                Thursday
              </p>
              <p className="text-right text-white text-white">09:00-20:00</p>
            </div>
            <div className="flex w-full justify-content-between ">
              <p className="text-left flex-grow text-lg font-weight-bold font-old">
                Friday
              </p>
              <p className="text-right text-white">09:00-20:00</p>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
