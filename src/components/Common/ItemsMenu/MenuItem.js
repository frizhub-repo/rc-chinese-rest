import React from "react";
import classes from "./MenuItem.module.css";

const styles = {
  itemImage: {
    borderRadius: "10px",
    width: "130px",
    height: "auto",
  },
};

export default function MenuItem({
  name,
  image,
  properties,
  price,
  ingredients,
  allergeni,
}) {
  return (
    <div className="d-flex justify-content-center mb-3">
      <div className="shadow-sm d-sm-flex d-md-none d-lg-flex flex-column align-items-center d-none">
        <img style={styles.itemImage} src={image} />
        <div
          className={`d-flex justify-content-between ${classes.properties_container}`}
        >
          <img
            className={`flex-1 ${classes.property} ${
              !properties.vegan && classes.not_property
            }`}
            src="assets/vegan.png"
          />
          <img
            className={`flex-1 ${classes.property} ${
              !properties.glutten_free && classes.not_property
            }`}
            src="assets/glutten-free.png"
          />{" "}
          <img
            className={`flex-1 ${classes.property} ${
              !properties.hot && classes.not_property
            }`}
            src="assets/hot.png"
          />
        </div>
      </div>
      <div className={`mr-2 my-2 my-lg-0 ${classes.details}`}>
        <div className="d-flex justify-content-between">
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <div className="d-flex">
          <p>Ingredients: {ingredients.map((i) => `${i}, `)}</p>
        </div>
        <div className="d-flex">
          <p>Allergeni: {allergeni.map((i) => `${i}, `)}</p>
        </div>
      </div>
    </div>
  );
}
