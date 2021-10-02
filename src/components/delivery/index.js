import { useRestaurantContext } from "Context/restaurantContext";
import React from "react";
import Hero from "../Common/Hero";
import ActionBox from "./ActionBox";
import Course from "./Course";
import Info from "./Info";

export default function Delivery() {
  const {
    restaurant: { restaurant, placeData },
  } = useRestaurantContext();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Info restaurant={restaurant} placeData={placeData} />
      </section>
      <section className="px-3 d-flex flex-column-reverse flex-lg-row pb-5">
        <div className="col-12 col-lg-8 mt-4 mt-lg-0">
          <Course />
        </div>
        <div className="col-12 col-lg-4">
          <ActionBox />
        </div>
      </section>
    </div>
  );
}
