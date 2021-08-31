import React, { useState } from "react";
import classes from "./Table.module.css";

const styles = {
  table: {
    tableLayout: "fixed",
  },
  header: {
    background: "#280813",
    padding: "10px 0px",
    borderRadius: "150px 150px 0% 0%",
  },
  row: {
    color: "white",
    textTransform: "uppercase",
  },
  column: {
    width: "50%",
    fontSize: "20px",
    padding: "10px 20px",
    textAlign: "center",
    border: "1px solid black",
  },
};

export default function Table() {
  const [timings, setTimings] = useState([
    ["Sunday", "Closed"],
    ["Monday", "13:00 - 15:30 / 21:00 - 01:00"],
    ["Tuesday", "13:00 - 15:30"],
    ["Wednesday", "13:00 - 15:30"],
    ["Thursday", "13:00 - 15:30"],
    ["Friday", "13:00 - 15:30 / 21:00 - 01:00"],
    ["Saturday", "13:00 - 15:30 / 21:00 - 01:00"],
  ]);

  return (
    <table style={styles.table}>
      <thead>
        <th style={styles.header} colSpan={2}>
          <img className="mx-auto" src="assets/clock.png" width={80} />
        </th>
      </thead>
      <tbody>
        {timings.map((timing) => (
          <tr
            className={
              timing[1].toLowerCase() === "closed"
                ? classes.closed
                : classes.opened
            }
            style={styles.row}
          >
            <td colSpan={1} style={styles.column}>
              {timing[0]}
            </td>
            <td colSpan={1} style={styles.column}>
              {timing[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
