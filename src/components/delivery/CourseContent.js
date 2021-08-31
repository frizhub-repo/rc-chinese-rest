import React, { useState } from "react";
import CourseItem from "./CourseItem";
import CourseSelector from "./CourseSelector";
import DiscountGenre from "./DiscountGenre";

const styles = {
  container: {
    background: "#F49E0B",
    borderRadius: "0px 0px 20px 20px",
    padding: "10px 20px",
  },
  items: {
    maxHeight: "55vh",
    overflowY: "scroll",
  },
};

export default function CourseContent({ showGenre }) {
  const [genreSelected, setGenreSelected] = useState(0);
  const [items, setItems] = useState(
    Array(8).fill({
      image: "assets/item-pic.png",
      name: "RAVIOLI AL VAPORE",
      price: "25€",
      ingredients: ["Pasta di Grano", "Sugo di Pomodoro", "Peperoncino"],
      allergeni: ["Farina"],
      properties: { vegan: true, hot: true },
    })
  );

  function handleClickGenre(id) {
    setGenreSelected(id);
  }

  return (
    <div style={styles.container}>
      <div>
        {showGenre && (
          <DiscountGenre
            selected={genreSelected}
            handleClick={handleClickGenre}
          />
        )}
        <input placeholder="Search..." className="form-control" type="text" />
        <div>
          <CourseSelector />
        </div>
        <div style={styles.items} className="row my-4">
          {items.map((item) => (
            <div className="col-12 col-md-6 mb-3">
              <CourseItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
