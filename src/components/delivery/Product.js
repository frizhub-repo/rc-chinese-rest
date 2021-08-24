import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addItem, setTotal } from "../../actions";
import AddBoxIcon from "@material-ui/icons/AddBox";
import RemoveIcon from "@material-ui/icons/IndeterminateCheckBox";
import { Box } from "@material-ui/core";

function Product({ product }) {
  const disp = useDispatch();
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count > 0) {
      const item = {
        name: product.title,
        product: product._id,
        price: product?.sizes?.[0]?.price,
        quantity: parseInt(count),
      };
      const total = count * product?.sizes?.[0]?.price;
      setCount(0);
      disp(addItem(item));
      disp(setTotal(total));
    }
  };

  return (
    <div
      className=" mx-2 mt-2 rounded-t border border-gray-300 shadow-sm"
      style={{ width: "30%" }}
    >
      <div
        className="block relative h-44 rounded-t hover:bg-black hover:bg-opacity-50 flex justify-content-center align-items-center overflow-hidden"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{
          background: `url("assets/productImg.jpeg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form onSubmit={handleSubmit}>
          <button
            className={` ${
              visible ? "" : "invisible"
            } rounded-pill px-2 py-3 bg-white font-weight-bolder`}
            type="submit"
          >
            <i className="fas fa-shopping-cart text-yellow-400"></i> Add to
            chart
          </button>
        </form>
      </div>
      <div className="mt-4 p-2">
        <h3 className="text-gray-900 title-font text-left text-lg font-medium">
          {product.title}
        </h3>
        <h2 className=" text-gray-500 text-xs text-left tracking-widest title-font mb-2">
          {product.description}
        </h2>
        <div className="flex justify-content-between">
          <p className="mt-1 font-weight-bold text-yellow-400">
            ${product?.sizes?.[0]?.price}
          </p>
          {/* <input
            value={count}
            type="number"
            min="0"
            onChange={(e) => setCount(e.target.value)}
            className={
              " border border-gray-300  p-1 rounded max-w-24 mr-1 ml-0 text-xs w-12"
            }
          /> */}
          <Box
            display="flex"
            alignItems="center"
            style={{ gap: "5px", fontSize: "18px" }}
          >
            {count > 0 ? (
              <RemoveIcon
                onClick={() => setCount(count - 1)}
                style={{ color: "#FFBE02", cursor: "pointer" }}
              />
            ) : (
              <RemoveIcon style={{ color: "#FFBE02" }} />
            )}
            {count}
            <AddBoxIcon
              onClick={() => setCount(count + 1)}
              style={{ color: "#FFBE02", cursor: "pointer" }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Product;
