import React, { useState } from "react";
import classes from "./MenuSelector.module.css";
import Carousel from "react-multi-carousel";

const styles = {
  option: {
    cursor: "pointer",
    border: "2px solid #280813",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    padding: "5px",
  },
  image: {
    borderRadius: "50%",
  },
};

export default function MenuSelector({
  selectedMenu,
  activeSection,
  handleChangeSectionIndex,
}) {
  return (
    <Carousel
      responsive={{
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      }}
      autoplay={false}
      swipeable={false}
      showDots={false}
    >
      {selectedMenu?.map((item, index) => (
        <div
          onClick={() => handleChangeSectionIndex(index)}
          style={styles.option}
          className={`d-flex flex-column align-items-center justify-content-center ${
            activeSection === index ? classes.active : classes.un_active
          }`}
        >
          <h4>{item?.category?.name}</h4>
          <img
            className="p-1 shadow-md"
            style={styles.image}
            src="assets/first-course.png"
            width={40}
          />
        </div>
      ))}
    </Carousel>
  );
}
