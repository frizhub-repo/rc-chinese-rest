import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { getGoogleMyBusinessLocations } from "../../api/public";
import { useStyles } from "./MainStyles";
import { useHistory } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import foodImg from "../../images/foodimage.jpg";
import StatusBox from "./StatusBox";
import Menu from "./Menu";
import Map from "./Map";
import Table from "./Table";
import Testimonial from "../Common/Testimonial";
import GalleryCarousel from "./GalleryCarousel";

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
    <div className="mx-5">
      <div>
        <Hero />
      </div>
      <div className="row mt-5 d-flex justify-content-between align-items-center">
        <div className="col col-lg-6">
          <StatusBox />
        </div>
        <div className="d-none col-6 d-lg-flex justify-content-end">
          <GalleryCarousel />
        </div>
      </div>

      <div>
        <div className="d-flex row justfiy-content-center align-items-center justify-content-lg-between my-5">
          <div className="d-flex justify-content-center col-12 col-lg-6">
            <Table />
          </div>
          <div className="col-12 col-lg-6">
            <Testimonial />
          </div>
        </div>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}
export default Home;
