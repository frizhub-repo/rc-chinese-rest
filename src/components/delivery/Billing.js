import React, { useState } from "react";

const styles = {
  divider: {
    background: "white",
    height: "2px",
    margin: "2px 0px",
  },
  total: {
    textDecoration: "underline",
  },
};

export default function Billing() {
  const [items, setItems] = useState([
    { name: "Spaghetti alla Puttanesca", qty: 1, price: 10 },
    { name: "Spaghetti alla Puttanesca", qty: 1, price: 10 },
  ]);

  return (
    <div className="my-3 text-white">
      {items.map((item) => (
        <div className="d-flex justify-content-between mb-1">
          <div className="d-flex align-items-center">
            <img src="assets/delete.png" width={30} />
            <small className="ml-1">
              <span>{item.qty}x</span> {item.name}
            </small>
          </div>
          <p>{item.price}€</p>
        </div>
      ))}
      <hr style={styles.divider} />
      <div className="d-flex justify-content-between align-items-center">
        <p>Subtotal</p>
        <p style={styles.total}>
          {items.reduce((prev, curr) => prev + curr.price * curr.qty, 0)}€
        </p>
      </div>
    </div>
  );
}
