import React, { useState } from "react";
import classes from "./Table.module.css";

const styles = {
  table: {
    tableLayout: "fixed",
    width: "100%",
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
    fontWeight: "normal",
  },
};

export default function Table({ openingHours }) {
  return (
    <table style={styles.table}>
      <thead>
        <th style={styles.header} colSpan={2}>
          <img className="mx-auto" src="assets/clock.png" width={80} />
        </th>
      </thead>
      <tbody>
        {openingHours.map((timing) => (
          <tr
            className={timing?.openTime ? classes.opened : classes.closed}
            style={styles.row}
          >
            <td colSpan={1} style={styles.column}>
              {timing?.openDay}
            </td>
            <td colSpan={1} style={styles.column}>
              {timing?.openTime || timing?.closeTime
                ? timing?.openTime + " - " + timing?.closeTime
                : "Closed"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
