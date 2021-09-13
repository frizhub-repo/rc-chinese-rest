import React from "react";
import classes from "./MenuItem.module.css";

const styles = {
  itemImage: {
    borderRadius: "10px",
    width: "130px",
    height: "130px",
  },
  imageContainer: {
    borderRadius: "10px",
  },
};

export default function MenuItem({ product }) {
  console.log(product);
  return (
    <div className="d-flex justify-content-center mb-3">
      <div
        className="shadow-md d-sm-flex d-md-none d-lg-flex flex-column align-items-center d-none"
        style={styles.imageContainer}
      >
        <img
          style={styles.itemImage}
          src={`${process.env.REACT_APP_API_BASE_URL}/${product?.images[0]}`}
          alt="Item Image"
        />
        <div
          className={`d-flex justify-content-between ${classes.properties_container}`}
        >
          <img
            className={`flex-1 ${classes.property} ${
              !product?.foodType?.vegan && classes.not_property
            }`}
            src="assets/vegan.png"
          />
          <img
            className={`flex-1 ${classes.property} ${
              !product?.foodType?.glutenFree && classes.not_property
            }`}
            src="assets/glutten-free.png"
          />{" "}
          <img
            className={`flex-1 ${classes.property} ${
              !product?.foodType?.spicy && classes.not_property
            }`}
            src="assets/hot.png"
          />
        </div>
      </div>
      <div className={`mr-2 my-2 my-lg-0 ${classes.details}`}>
        <div className="d-flex justify-content-between">
          <h4>{product?.title}</h4>
          <h4>{product?.sizes?.price}</h4>
        </div>
        <div className="d-flex">
          <p>Ingredients: {product?.ingredients.map((i) => `${i}, `)}</p>
        </div>
        <div className="d-flex">
          <p>Allergeni: {product?.allergies.map((i) => `${i}, `)}</p>
        </div>
      </div>
    </div>
  );
}
