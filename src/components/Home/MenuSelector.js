import React, { useState } from "react";

const styles = {
  container: {
    background: "white",
  },
  optionContainer: {
    // background: "white",
    // border: "1px solid #280813",
    // borderRadius: "50%",
    // height: "100%",
    padding: "0px 5px",
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
        <div className="d-flex justify-content-around py-2">
          {options.map((option, index) => (
            <div style={styles.optionContainer}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
