import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = () => ({
  itemContainer: {
    width: "300px",
    height: "300px",
    cursor: "pointer",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  selectedContent: {
    position: "absolute",
    bottom: -10,
    background: "#F49E0B",
    color: "white",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "5px solid white",
  },
  content: {
    position: "absolute",
    bottom: -10,
    background: "#280813",
    color: "#F49E0B",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "5px solid #F49E0B",
  },
});

export default function ItemCarousel({
  specialMenu,
  activeIndex,
  setActiveIndex,
  showItems = null,
}) {
  const styles = useStyles();

  const getCount = (items) => {
    let count = 0;
    items.forEach((item) => {
      count = count + item?.products?.length;
    });
    return count;
  };

  return specialMenu?.length > 0 ? (
    <Carousel
      responsive={{
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: showItems?.xl ?? 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: showItems?.lg ?? 2,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: showItems?.md ?? 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: showItems?.sm ?? 1,
        },
      }}
      autoplay={false}
      swipeable={false}
      showDots={false}
    >
      {specialMenu?.length > 0 &&
        specialMenu?.map((menu, index) => (
          <div
            onClick={(e) => setActiveIndex(index)}
            style={styles.itemContainer}
          >
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/${menu.imageUrl}`}
              width={300}
              className="selector"
            />
            <div
              style={
                index === activeIndex ? styles.selectedContent : styles.content
              }
            >
              <h4>{menu.title.toUpperCase()}</h4>
              <img
                src="assets/restaurant.png"
                alt="Restaurant"
                className="selector"
              />
              <h4>{getCount(menu?.items)}</h4>
            </div>
          </div>
        ))}
    </Carousel>
  ) : null;
}
