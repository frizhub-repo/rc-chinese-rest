import React from "react";
import MenuSelector from "./MenuSelector";

const styles = {
  menuContainer: {
    background: "#280813",
    borderRadius: "20px",
    width: "100%",
  },
  menuHeader: {
    color: "white",
  },
};

export default function Menu() {
  return (
    <div className="d-flex justify-content-between align-items-center mt-5">
      <button className="shadow-sm">
        <img src="assets/reserve-option.png" width={100} />
      </button>
      <div style={styles.menuContainer}>
        <h2 style={styles.menuHeader}>OUR MENU SELECTION</h2>
        <MenuSelector />
      </div>
      <button className="shadow-sm">
        <img src="assets/deliver-option.png" width={100} />
      </button>
    </div>
  );
}
