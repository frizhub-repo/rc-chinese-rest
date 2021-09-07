import { useRestaurantContext } from "Context/restaurantContext";
import React, { useState } from "react";
import Hero from "../Common/Hero";
import Review from "../Common/Review";
import InfoBox from "./InfoBox";
import MenuBox from "./MenuBox";
import Status from "./Status";
import TableCarousel from "./TableCarousel";
import { Carousel } from "react-bootstrap";

export default function TableReservation() {
  const {
    restaurant: { placeData },
  } = useRestaurantContext();

  const [reviews, setReviews] = useState([
    {
      name: "Filippo",
      image: "assets/review-client.png",
      review:
        "E’ il mio ristorante preferito a Pisa. Andateci e non ve ne pentirete!!! I piatti sono buonissimi ed in più il personale è gentile. Super consigliato, noi appena possiamo (data la pandemia) ci torniamo con piacere",
      vote: 4,
    },
    {
      name: "Giulia",
      image: "assets/testimonial-client.png",
      review:
        "E’ il mio ristorante preferito a Pisa. Andateci e non ve ne pentirete!!! I piatti sono buonissimi ed in più il personale è gentile. Super consigliato, noi appena possiamo (data la pandemia) ci torniamo con piacere",
      vote: 4,
    },
  ]);

  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="d-flex flex-column-reverse flex-md-row row mt-5 mx-2">
        <div className="col-12 col-md-6 col-lg-7">
          <div className="row">
            <TableCarousel />
          </div>
          <div className="row">
            <MenuBox />
          </div>
          <div className="d-none d-sm-flex flex-column align-items-center my-5"></div>
        </div>
        <div className="d-none d-lg-block col-1"></div>
        <div className="col-12 col-md-6 col-lg-4">
          <InfoBox />
          <Status
            userTotalRating={placeData?.user_ratings_total}
            rating={placeData?.rating}
          />

          {placeData?.reviews && (
            <div className="d-none d-md-block">
              <Carousel indicators={false}>
                {placeData?.reviews.map((review) => (
                  <Carousel.Item>
                    <Review {...review} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
