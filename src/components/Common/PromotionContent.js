import { Skeleton } from "@material-ui/lab";
import { getReservationOffers } from "api/public";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const styles = {
  carouselItem: {
    background: "#280813",
    padding: "10px 20px",
    borderRadius: "20px",
    color: "white",
  },
  divider: {
    height: "2px",
  },
  offer: {
    background: "#F49E0B",
    padding: "20px",
    borderRadius: "20px",
    fontSize: "30px",
  },
  skeletongSpaing: {
    margin: "0 20px",
    borderRadius: "30px",
  },
  itemHeight: {
    height: "120px",
  },
  discountImg: {
    width: "200px",
    height: "180px",
    borderRadius: "30px",
  },
};

export default function PromotionContent() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [carouselItemCount, setCarouselItemCount] = useState(3);
  const [discounts, setDiscounts] = useState([]);
  const fetchDiscounts = async () => {
    try {
      const res = await getReservationOffers();
      setDiscounts(res?.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchDiscounts();
  }, []);

  useEffect(() => {
    setCarouselItemCount(discounts?.length);
  }, [discounts]);

  function toggleCarousel(direction) {
    const [min, max] = [0, carouselItemCount - 1];

    if (direction === "next") {
      if (index === max) setIndex(0);
      else setIndex(index + 1);
    } else if (direction === "prev") {
      if (index === 0) setIndex(max);
      else setIndex(index - 1);
    }

    setDirection(direction);
  }

  return (
    <div style={{ width: "100%" }}>
      <Carousel
        indicators={false}
        controls={false}
        activeIndex={index}
        direction={direction}
      >
        {discounts?.length ? (
          discounts?.map((item) => (
            <Carousel.Item>
              <div style={styles.carouselItem}>
                <div className="d-flex justify-content-between">
                  <a
                    class="left carousel-control"
                    onClick={() => toggleCarousel("prev")}
                  >
                    <img src="assets/arrow-left.png" />
                  </a>
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}/${item?.imageUrl}`}
                    style={styles.discountImg}
                  />
                  <a
                    class="right carousel-control"
                    onClick={() => toggleCarousel("next")}
                  >
                    <img src="assets/arrow-right.png" />
                  </a>
                </div>
                <div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-9">
                      <h3>{item?.title}</h3>
                      <hr style={styles.divider} />
                      <div
                        className="d-flex flex-column align-items-start custom-scroll"
                        style={styles.itemHeight}
                      >
                        {item.items.map((dish) => (
                          <p>{dish}</p>
                        ))}
                      </div>
                    </div>
                    {item?.discountPrice && (
                      <div
                        className="col-xs-12 col-sm-3 d-flex flex-column"
                        style={styles.offer}
                      >
                        <span>SPECIAL OFFER</span>
                        <span>{item?.discountPrice}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))
        ) : (
          <Skeleton
            variant="rect"
            height={350}
            style={styles.skeletongSpaing}
          />
        )}
      </Carousel>
    </div>
  );
}