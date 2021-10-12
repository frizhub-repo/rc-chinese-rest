import React, { useState } from "react";
import classes from "./Styles/DailyMenuContent.module.css";
import { useRestaurantContext } from "Context/restaurantContext";

const styles = {
  divider: {
    height: "2px",
    background: "black",
    margin: "0px",
  },
  courseName: {
    color: "black",
    textTransform: "uppercase",
  },
  itemImage: {
    borderRadius: "10px",
    width: "130px",
    height: "130px",
  },
  courseHeight: {
    height: "fit-content",
    maxHeight: "1000px",
  },
};

function DailyMenuItem({
  title,
  images,
  foodType,
  sizes,
  ingredients,
  allergies,
}) {
  const { restaurant = {} } = useRestaurantContext();
  return (
    <div className="d-flex justify-content-center mb-3">
      <div className="shadow-sm d-lg-flex flex-column align-items-center d-none">
        <img
          style={styles.itemImage}
          src={
            images[0]
              ? `${process.env.REACT_APP_API_BASE_URL}/${images[0]}`
              : `${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`
          }
          alt="product"
        />
        <div
          className={`d-flex justify-content-between ${classes.properties_container}`}
        >
          <img
            className={`flex-1 ${classes.property} ${
              !foodType.vegan && classes.not_property
            }`}
            src="assets/vegan.png"
            alt="vegan"
          />
          <img
            className={`flex-1 ${classes.property} ${
              !foodType.glutenFree && classes.not_property
            }`}
            alt="Gluten free"
            src="assets/glutten-free.png"
          />{" "}
          <img
            className={`flex-1 ${classes.property} ${
              !foodType.spicy && classes.not_property
            }`}
            src="assets/hot.png"
            alt="Spicy"
          />
        </div>
      </div>
      <div className={`mr-2 my-2 my-lg-0 ${classes.details}`}>
        <div className="d-flex justify-content-between">
          <h4>{title}</h4>
          <h4>{sizes?.[0]?.price}</h4>
        </div>
        <div className="d-flex">
          <p>Ingredients: {ingredients.map((i) => `${i}, `)}</p>
        </div>
        <div className="d-flex">
          <p>Allergeni: {allergies.map((i) => `${i}, `)}</p>
        </div>
      </div>
    </div>
  );
}

export default function DailyMenuContent({ specialMenu }) {
  return (
    <div className="custom-scroll" style={styles.courseHeight}>
      <hr style={styles.divider} />
      {specialMenu?.length > 0 ? (
        specialMenu?.map((menu) =>
          menu?.items.map(({ category, products }) => (
            <div>
              <h2 style={styles.courseName}>{category?.name}</h2>
              {products?.length > 0 ? (
                products?.map((item) => <DailyMenuItem {...item} />)
              ) : (
                <span>This section don't have any products</span>
              )}
              <hr style={styles.divider} />
            </div>
          ))
        )
      ) : (
        <span>No special menu found</span>
      )}
    </div>
  );
}
