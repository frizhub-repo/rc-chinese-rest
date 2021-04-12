import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axiosIntance from "../../utils/axios-configure";
import { removeItem, removeOrderItems } from "../../actions/index";

function Control() {
  const disp = useDispatch();
  const total = useSelector((state) => state.orders).total;
  const items = useSelector((state) => state.orders).items;
  const minimum = useSelector((state) => state.orders).minimum;
  const delivery = useSelector((state) => state.orders).delivery;
  const orderNow = () => {
    total > 0 &&
      axiosIntance
        .post("/api/v1/orders/customers", { products: items })
        .then((res) => {
          toast.success("Order created successfully");
          disp(removeOrderItems());
          console.log(res);
        })
        .catch((err) => console.log(err));
  };

  return (
    <section className="w-full ml-4 p-4 border border-gray-300">
      <div className="mb-3">
        {minimum - total > 0 && (
          <p className="text-xs text-left text-gray-500 mt-1 mb-3">
            ${minimum - total} to reach the minimum order
          </p>
        )}
        <button
          className="w-full rounded-pill  bg-yellow-500 text-white text-center text-xs py-2 mb-4  font-weight-light"
          onClick={orderNow}
        >
          ORDER NOW
        </button>
        <p className="text-xs text-center text-indigo-500 ">
          If you have any food allergy please click here
        </p>
      </div>
      <div>
        <p className="text-black text-center p-2 text-xs border-2 border-red-500 rounded-pill  mt-1">
          Home delivery {total}
        </p>

        {items.length > 0 && (
          <div className=" w-full p-2 mt-2 ">
            {items.map((item) => {
              return (
                <div className="flex justify-content-between w-full">
                  <div className="w-1/6 px-1">
                    <p className="text-xs text-left ">x{item.quantity}</p>
                    <button
                      className="text-xs text-left border-0 bg-white text-black"
                      style={{ verticalAlign: "sub" }}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="flex-grow-1 flex justify-content-between px-1 w-full">
                    <div>
                      <p className="text-gray-500 text-left text-xs mb-1">
                        {item.name}
                      </p>
                      <button className="text-xs text-left border-0 bg-white text-black" onClick={() => disp(removeItem(item))}>
                        Delete
                      </button>
                    </div>
                    <div className="flex-grow-1 ml-4">
                      <p className="text-black mb-0  text-xs text-right">
                        ${item.price}
                      </p>
                      <p className="text-indigo-500 text-xs text-right">
                        Ingredients
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-content-between mt-2">
        <p className="flex-grow-1 text-left text-xs text-black">Subtotal</p>
        <p className="text-left text-xs text-black">{total}$</p>
      </div>
      <div className="flex justify-content-between">
        <p className="flex-grow-1 text-left text-xs text-black">Delivery</p>
        <p className="text-left text-xs text-black">{delivery}$</p>
      </div>
      <div className="flex justify-content-between ">
        <p className="flex-grow-1 text-left text-xs text-black">Total</p>
        <p className="text-left text-xs text-black">{total + delivery}$</p>
      </div>
    </section>
  );
}

export default Control;
