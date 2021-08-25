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
  },
};

export default function PromotionContent() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [carouselItemCount, setCarouselItemCount] = useState(3);
  const [items, setItems] = useState([
    {
      name: "Lunch Offer",
      dishes: ["Plate #1", "Plate #2", "Plate #3"],
      price: "12€",
      original: "20€",
    },
    {
      name: "Lunch Offer",
      dishes: ["Plate #1", "Plate #2", "Plate #3"],
      price: "12€",
      original: "20€",
    },
    {
      name: "Lunch Offer",
      dishes: ["Plate #1", "Plate #2", "Plate #3"],
      price: "12€",
      original: "20€",
    },
  ]);

  useEffect(() => {
    setCarouselItemCount(items.length);
  }, []);

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
    <Carousel
      indicators={false}
      controls={false}
      activeIndex={index}
      direction={direction}
    >
      {items.map((item) => (
        <Carousel.Item>
          <div style={styles.carouselItem}>
            <div className="d-flex justify-content-between">
              <a
                class="left carousel-control"
                onClick={() => toggleCarousel("prev")}
              >
                <img src="assets/arrow-left.png" />
              </a>
              <h1>IMAGE</h1>
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
                  <h3>{item.name}</h3>
                  <hr style={styles.divider} />
                  <div className="d-flex flex-column align-items-start">
                    {item.dishes.map((dish) => (
                      <p>{dish}</p>
                    ))}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3" style={styles.offer}>
                  SPECIAL OFFER
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
