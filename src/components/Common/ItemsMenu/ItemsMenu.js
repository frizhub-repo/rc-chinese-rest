import React from "react";
import MenuContent from "./MenuContent";

const styles = {
  header: {
    background: "#280313",
    color: "white",
    borderRadius: "20px 20px 0px 0px",
    padding: "10px 0px",
  },
};

export default function ItemsMenu({ selectedMenu }) {
  return (
    <div>
      <div style={styles.header}>
        <h2>{selectedMenu?.title}</h2>
      </div>
      <div>
        <MenuContent items={selectedMenu?.items} />
      </div>
    </div>
  );
}
