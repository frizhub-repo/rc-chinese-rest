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
  bundlePrdSpacing: {
    paddingLeft: "30px",
  },
  sizes: {
    textAlign: "left",
    paddingLeft: "5px",
    fontSize: "14px",
  },
  productName: {
    fontSize: "16px",
  },
  priceTagContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  originalPriceTag: {
    fontSize: "15px",
    lineHeight: "19px",
    color: "rgba(0, 0, 0, 0.5)",
    textDecorationLine: "line-through",
    marginRight: "10px",
  },
};

export default function Billing() {
  const { products, total } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const removeItem = (product) => {
    console.log(product);
    dispatch(removeQuantity(product));
  };

  return (
    <div className="my-3 text-white">
      {products.map((item) => (
        <>
          <div className="d-flex justify-content-between mb-1">
            <div className="d-flex align-items-center">
              <img
                onClick={() => removeItem(item)}
                src="assets/delete.png"
                width={30}
                className="cursor-pointer"
              />
              <div className="d-flex flex-column">
                <small className="ml-1" style={styles.productName}>
                  <span>{item.quantity}x</span> {item.name}
                </small>
                <small style={styles.sizes}>Size</small>
              </div>
            </div>
            {console.log(item)}
            {item.price ? (
              <div style={styles.priceTagContainer}>
                {(item?.isDiscount === "flat" ||
                  item?.isDiscount === "percentage") && (
                  <span style={styles.originalPriceTag}>
                    {item?.originalPrice}€
                  </span>
                )}
                <p>{item.price > 0 ? item.price : 0}€</p>
              </div>
            ) : (
              <p className={styles.free}>Free</p>
            )}
          </div>
          {item?.bundledProduct?.length > 0 &&
            item?.bundledProduct?.map((productObj) => (
              <div
                style={styles.bundlePrdSpacing}
                className="d-flex justify-content-between mb-1"
              >
                <div className="d-flex align-items-center">
                  <small className="ml-1">
                    <span>{item?.quantity}x</span> {productObj?.product?.title}
                  </small>
                </div>
                <p>Free</p>
              </div>
            ))}
        </>
      ))}
      <hr style={styles.divider} />
      <div className="d-flex justify-content-between align-items-center">
        <p>Subtotal</p>
        <p style={styles.total}>{total}€</p>
      </div>
    </div>
  );
}
