import { customerMenu } from "api/public";
import PromotionContent from "components/Common/PromotionContent";
import ItemCarousel from "components/Menu/ItemCarousel";
import { useRestaurantContext } from "Context/restaurantContext";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { isEmpty } from "utils/common";
import Testimonial from "../Common/Testimonial";
import GalleryCarousel from "./GalleryCarousel";
import Hero from "./Hero";
import { useStyles } from "./MainStyles";
import Map from "./Map";
import StatusBox from "./StatusBox";
import Table from "./Table";
import ItemsMenu from "components/Common/ItemsMenu/ItemsMenu";

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

  const [specialMenu, setSpecialMenus] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getRestaurantMenu() {
      setLoading(true);
      try {
        const res = await customerMenu();
        setSpecialMenus(res?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getRestaurantMenu();
  }, []);

  return (
    <div className="mx-5">
      <div>
        <Hero />
      </div>
      <div className="row my-5 d-flex justify-content-between align-items-center">
        <div className="col col-lg-6">
          <StatusBox placeData={placeData} />
        </div>
        <div className="d-none col-6 d-lg-flex justify-content-end">
          <GalleryCarousel />
        </div>
      </div>
      <section className="my-5">
        <div className="mb-4">
          <ItemCarousel
            specialMenu={specialMenu}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            showItems={{ xl: 6, lg: 5 }}
          />
        </div>
        <div>
          {specialMenu?.length > 0 && (
            <ItemsMenu selectedMenu={specialMenu?.[activeIndex]} />
          )}
        </div>
      </section>
      <div>
        <div className="d-flex row justfiy-content-center align-items-center justify-content-lg-between my-5">
          <div className="d-flex justify-content-center col-12 col-lg-6">
            <PromotionContent />
          </div>
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
