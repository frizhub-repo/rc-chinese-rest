import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuSelector from "./MenuSelector";

const styles = {
  container: {
    background: "white",
  },
  divider: {
    height: "2px",
    background: "#280813",
    border: "none",
  },
  items: {
    padding: "0px 20px",
    maxHeight: "60vh",
    overflowY: "scroll",
  },
};

export default function MenuContent() {
  const [items, setItems] = useState(
    Array(8).fill({
      image: "assets/item-pic.png",
      name: "SPAGHETTI ALLA PUTTANESCA",
      price: "5€",
      ingredients: ["Pasta di Grano", "Sugo di Pomodoro", "Peperoncino"],
      allergeni: ["Farina"],
      properties: { vegan: true, hot: true },
    })
  );

  return (
    <div style={styles.container}>
      <div>
        <MenuSelector />
      </div>
      <hr style={styles.divider} />
      <div style={styles.items}>
        <div className="row">
          {items.map((item) => (
            <div className="col-md-6 col-12">
              <MenuItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
