import React, { useState } from "react";
import CurvedText from "./CurvedText";

const styles = {
  container: {
    background: "white",
  },
  optionContainer: {
    borderRadius: "50%",
    border: "1px solid #280813",
    padding: "0px -20px",
  },
};

export default function MenuSelector() {
  const [selected, setSelected] = useState(0);
  const [options, setOptions] = useState([
    { name: "First Course", icon: "assets/first-course.png" },
    { name: "Second Course", icon: "assets/second-course.png" },
    { name: "Desserts", icon: "assets/desserts.png" },
    { name: "First Course", icon: "assets/soft-drinks.png" },
  ]);

  return (
    <div style={styles.container}>
      <div className="">
        <div className="d-flex justify-content-between">
          {options.map((option, index) => (
            <div style={styles.optionContainer}>
              <CurvedText
                style={{ margin: "-20px" }}
                text={option.name}
                textColor={"#280813"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
