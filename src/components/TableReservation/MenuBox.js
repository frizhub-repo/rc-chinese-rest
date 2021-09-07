import React, { useState } from "react";
import classes from "./MenuBox.module.css";
import DailyMenuContent from "./DailyMenuContent";
import PromotionContent from "./PromotionContent";
import InfoContent from "./InfoContent";
import { useHistory } from "react-router";

const styles = {
  container: {
    marginTop: "40px",
    marginBottom: "40px",
    width: "100%",
  },
  menuContent: {
    background: "white",
    padding: "40px 20px",
    borderRadius: "0px 0px 20px 20px",
  },
  groupContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 0px",
  },
  groupImageContainer: {
    padding: "5px",
    borderRadius: "10px 0px 0px 10px",
    border: "1px solid black",
  },
  groupButton: {
    background: "#280813",
    borderRadius: "0px 10px 10px 0px",
    padding: "5px",
    fontSize: "20px",
    color: "white",
  },
};

export default function MenuBox() {
  const history = useHistory();

  const [categorySelected, setCategorySelected] = useState(0);
  const [categories, setCategories] = useState([
    "daily menu",
    "promotions",
    "info",
  ]);

  function giveContent(category) {
    switch (category) {
      case 0:
        return <DailyMenuContent />;
      case 1:
        return <PromotionContent />;
      case 2:
        return <InfoContent />;
    }
  }

  return (
    <div style={styles.container}>
      <div className="d-flex">
        {categories.map((category, index) => (
          <div
            onClick={(e) => setCategorySelected(index)}
            className={`flex-1 shadow-md ${classes.category} ${
              index === categorySelected
                ? classes.category_active
                : classes.category_unactive
            }`}
          >
            <h4>{category}</h4>
          </div>
        ))}
      </div>
      <div style={styles.menuContent}>
        {giveContent(categorySelected)}
        <div style={styles.groupContainer} className="input-group">
          <div
            style={styles.groupImageContainer}
            className="input-group-prepend shadow-md"
          >
            <img src="assets/menu.png" width={50} />
          </div>
          <button
            className="shadow-md"
            style={styles.groupButton}
            onClick={() => history.push("/menu")}
          >
            CHECK ALSO OUR MENU!
          </button>
        </div>
      </div>
    </div>
  );
}
