import React, { useState, useEffect } from "react";
import select from "../../images/triangle.svg";
import Skeleton from "@material-ui/lab/Skeleton";
import { productsList } from "../../api/products";

import Table from "./Table";

function Body() {
  const [products, setProducts] = useState([]);
  const [key, setKey] = useState(1);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await productsList();
      setProducts(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="w-full py-4 px-36 ">
      <div className="flex justify-content-center mb-0">
        <div className="mx-4 cursor-pointer" onClick={() => setKey(1)}>
          <p
            className={`text-center font-weight-bold text-xs mt-2 mb-1 ${
              key == 1 ? "text-yellow-400" : ""
            }`}
          >
            Breakfast
          </p>
          {key === 1 && (
            <div className="h-4 w-full">
              <img src={select} className="w-4 h-full  object-center " />
            </div>
          )}
        </div>
        <div className="mx-4 cursor-pointer" onClick={() => setKey(2)}>
          <p
            className={`text-center font-weight-bold text-xs mt-2 mb-1 ${
              key == 2 ? "text-yellow-400" : ""
            }`}
          >
            Lunch
          </p>
          {key === 2 && (
            <div className="h-4 w-full">
              <img src={select} className="w-4 h-full  object-center " />
            </div>
          )}
        </div>
        <div className="mx-4 cursor-pointer" onClick={() => setKey(3)}>
          <p
            className={`text-center font-weight-bold text-xs mt-2 mb-1 ${
              key == 3 ? "text-yellow-400" : ""
            }`}
          >
            Dinner
          </p>
          {key === 3 && (
            <div className="h-4 w-full">
              <img src={select} className="w-4 h-full  object-center " />
            </div>
          )}
        </div>
        <div className="mx-4 cursor-pointer" onClick={() => setKey(4)}>
          <p
            className={`text-center font-weight-bold text-xs mt-2 mb-1 ${
              key == 4 ? "text-yellow-400" : ""
            }`}
          >
            Drinks
          </p>
          {key === 4 && (
            <div className="h-4 w-full">
              <img src={select} className="w-4 h-full  object-center " />
            </div>
          )}
        </div>
        <div className="mx-4 cursor-pointer" onClick={() => setKey(5)}>
          <p
            className={`text-center font-weight-bold text-xs mt-2 mb-1 ${
              key == 5 ? "text-yellow-400" : ""
            }`}
          >
            Desserts
          </p>
          {key === 5 && (
            <div className="h-4 w-full">
              <img src={select} className="w-4 h-full  object-center " />
            </div>
          )}
        </div>
        <div className="mx-4 cursor-pointer" onClick={() => setKey(6)}>
          <p
            className={`text-center font-weight-bold text-xs mt-2 mb-1 ${
              key == 6 ? "text-yellow-400" : ""
            }`}
          >
            Fries
          </p>
          {key === 6 && (
            <div className="h-4 w-full">
              <img src={select} className="w-4 h-full  object-center " />
            </div>
          )}
        </div>
      </div>
      <div
        className="mt-0 px-24  flex justify-content-center"
        style={{ flexDirection: "column" }}
      >
        {/* {key == 1 && <Table />}
        {key == 2 && <Table />}
        {key == 3 && <Table />}
        {key == 4 && <Table />}
        {key == 5 && <Table />}
        {key == 6 && <Table />} */}

        {loading
          ? [...Array(5).keys()].map((i) => (
              <Skeleton
                variant="rect"
                height={100}
                width={"100%"}
                style={{
                  marginTop: "20px",
                }}
              />
            ))
          : products?.length
          ? products?.map((product) => <Table data={product} />)
          : null}
      </div>
    </div>
  );
}

export default Body;
