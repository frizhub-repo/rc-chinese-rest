import React, { useState } from "react";
import CourseContent from "./CourseContent";
import MenuType from "./MenuType";

const styles = {
  container: {
    position: "relative",
  },
  header: {
    background: "#280313",
    color: "white",
    borderRadius: "20px 20px 0px 0px",
    padding: "10px 0px",
  },
  menuTypeContainer: {
    position: "absolute",
    top: "50%",
    translate: "transformX(-50%)",
    zIndex: "10",
    left: -15,
  },
};

export default function Course() {
  const [optionSelected, setOptionSelected] = useState(2);

  function handleClickOption(id) {
    setOptionSelected(id);
  }

  return (
    <div style={styles.container}>
      <div style={styles.menuTypeContainer}>
        <MenuType selected={optionSelected} handleClick={handleClickOption} />
      </div>
      <div style={styles.header}>
        <h2>DEVLIVERY COURSE</h2>
      </div>
      <CourseContent showGenre={optionSelected === 0 || optionSelected === 1} />
    </div>
  );
}
