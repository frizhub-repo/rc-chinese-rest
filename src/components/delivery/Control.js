import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addQuantity, removeItem, removeQuantity } from "../../actions/index";
import { useRestaurantContext } from "../../Context/restaurantContext";

function Control() {
  let { token, customerData } = useRestaurantContext();
  const [modalShow, setModalShow] = useState(false);
  const total = useSelector((state) => state.orders).total;
  const products = useSelector((state) => state.orders).products;
  const minimum = useSelector((state) => state.orders).minimum;
  const delivery = useSelector((state) => state.orders).delivery;
  const currency = useSelector((state) => state.orders).currency;
  const time = useSelector((state) => state.orders).time;
  const note = useSelector((state) => state.orders).note;
  const address = useSelector((state) => state.orders).address;
  const history = useHistory();

  const disp = useDispatch();

  const orderNow = () => {
    if (customerData?.addresses?.length) {
      history.push("/chooseAddress");
    } else {
      history.push("/deliveryAddress");
    }
  };

  return (
    <div className="w-full ml-4 p-1">
      <h1 className="text-justify text-gray-500 font-weight-bold text-lg mb-2">
        <i className="fas fa-shopping-basket"></i> Toltal: {total ? total : `0`}
        {currency}
      </h1>
      <section className="p-3 border border-gray-300 shadow-sm">
        <div className="mb-3">
          {/* {minimum - total > 0 && (
                        <p className="text-xs text-left text-gray-500 mt-1 mb-3">
                            ${minimum - total} to reach the minimum order
                        </p>
                    )} */}
          <button
            disabled={products?.length ? false : true}
            // onClick={() => setShowBtn("Payment")}
            onClick={() => {
              if (token) {
                orderNow();
              } else {
                window.localStorage.setItem("redirectToOrder", "yes");
                history.push("/auth");
              }
            }}
            style={{
              background: products?.length ? "#FFBE02" : "#ffe28c",
              color: "#fff",
              width: "100%",
              height: "40px",
              borderRadius: "50px",
            }}
            // className="w-full  bg-yellow-500 text-white text-center text-xs py-2 mb-4  font-weight-normal"
          >
            Order Now
          </button>

          {/* <p className="text-xs text-center text-indigo-500 ">
                        If you have any food allergy please click here
                    </p> */}
        </div>
        <div>
          {/* <p className="text-black text-center p-2 text-xs border-2 border-yellow-500  mt-1 font-weight-normal">
                        Home delivery {total}
                    </p> */}

          {products?.length > 0 && (
            <div className=" w-full p-2 mt-2 ">
              {products?.map((item) => {
                return (
                  <div
                    className="flex justify-content-between w-full"
                    style={{ alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: "15%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <button>
                        <ArrowDropUpIcon
                          onClick={() => {
                            disp(addQuantity(item.product));
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                      <button disabled={item.quantity > 1 ? false : true}>
                        <ArrowDropDownIcon
                          onClick={() => {
                            disp(removeQuantity(item.product));
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>
                    <div style={{ width: "10%", marginTop: "3px" }}>
                      <label className="text-xs text-left ">
                        x{item.quantity}
                      </label>
                    </div>
                    <div style={{ width: "40%" }}>
                      <label className="text-gray-500 text-left text-xs mb-1">
                        {item.name}
                      </label>
                    </div>
                    <div style={{ width: "20%" }}>
                      <label className="text-black mb-0  text-xs text-right">
                        {currency}
                        {item.price}
                      </label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "15%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <DeleteIcon
                        style={{ height: 15 }}
                        onClick={() => {
                          disp(removeItem(item.product));
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* <div className="flex justify-content-between mt-2">
                    <p className="flex-grow-1 text-left text-xs text-black">
                        Subtotal
                    </p>
                    <p className="text-left text-xs text-black">{total}$</p>
                </div>
                <div className="flex justify-content-between">
                    <p className="flex-grow-1 text-left text-xs text-black">
                        Delivery
                    </p>
                    <p className="text-left text-xs text-black">{delivery}$</p>
                </div> */}
        <div className="flex justify-content-between ">
          <p className="flex-grow-1 text-left text-xs text-black">Total</p>
          <p className="text-left text-xs text-black">
            {total ? total + delivery : `0`}
            {currency}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Control;
