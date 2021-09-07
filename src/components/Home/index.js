import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { getGoogleMyBusinessLocations } from "../../api/public";
import { useStyles } from "./MainStyles";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import foodImg from "../../images/foodimage.jpg";
import StatusBox from "./StatusBox";
import Menu from "./Menu";
import Map from "./Map";
import Table from "./Table";
import Testimonial from "../Common/Testimonial";
import GalleryCarousel from "./GalleryCarousel";
import { useRestaurantContext } from "Context/restaurantContext";
import { isEmpty } from "utils/common";

function Home() {
  const classes = useStyles();
  const {
    restaurant: { placeData },
  } = useRestaurantContext();
  const [openingHours, setOpeningHours] = useState([
    { id: 1, openDay: "Monday" },
    { id: 2, openDay: "Tuesday" },
    { id: 3, openDay: "Wednesday" },
    { id: 4, openDay: "Thursday" },
    { id: 5, openDay: "Friday" },
    { id: 6, openDay: "Saturday" },
    { id: 0, openDay: "Sunday" },
  ]);
  useEffect(() => {
    formatOpeningHours();
  }, [placeData]);

  const splitTime = (time) => time.slice(0, 2) + ":" + time.slice(2);

  function formatOpeningHours() {
    if (!isEmpty(placeData)) {
      const {
        opening_hours: { periods },
      } = placeData;
      for (const { open, close } of periods) {
        setOpeningHours((prevOpeningHours) =>
          prevOpeningHours.map((openingHour) =>
            openingHour?.id === open?.day
              ? {
                  ...openingHour,
                  openTime: splitTime(open?.time),
                  closeTime: splitTime(close?.time),
                }
              : openingHour
          )
        );
      }
    }
  }

  return (
    <div className="mx-5">
      <div>
        <Hero />
      </div>
      <div className="row mt-5 d-flex justify-content-between align-items-center">
        <div className="col col-lg-6">
          <StatusBox placeData={placeData} />
        </div>
        <div className="d-none col-6 d-lg-flex justify-content-end">
          <GalleryCarousel />
        </div>
      </div>
      {/* <div>
        <Menu />
      </div> */}
      <div>
        <div className="d-flex row justfiy-content-center align-items-center justify-content-lg-between my-5">
          <div className="d-flex justify-content-center col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <Testimonial reviews={placeData?.reviews} />
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-lg-6">
          <Map />
        </div>
        <div className="col-12 offset-lg-1 col-lg-5 my-3 my-lg-0">
          <Table openingHours={openingHours} />
        </div>
      </div>
    </div>
  );
}
export default Home;
