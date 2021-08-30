import { removeQuantity } from "actions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const { products, total } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const [items, setItems] = useState([
    { name: "Spaghetti alla Puttanesca", qty: 1, price: 10 },
    { name: "Spaghetti alla Puttanesca", qty: 1, price: 10 },
  ]);

  const removeItem = (product) => {
    console.log(product);
    dispatch(removeQuantity(product));
  };

  return (
    <div className="my-3 text-white">
      {products.map((item) => (
        <div className="d-flex justify-content-between mb-1">
          <div className="d-flex align-items-center">
            <img
              onClick={() => removeItem(item)}
              src="assets/delete.png"
              width={30}
            />
            <small className="ml-1">
              <span>{item.quantity}x</span> {item.name}
            </small>
          </div>
          <p>{item.price}€</p>
        </div>
      ))}
      <hr style={styles.divider} />
      <div className="d-flex justify-content-between align-items-center">
        <p>Subtotal</p>
        <p style={styles.total}>{total}€</p>
      </div>
    </div>
  );
}
