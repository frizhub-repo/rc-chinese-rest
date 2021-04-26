import React, { useState, useEffect } from "react";
import select from "../../images/triangle.svg";
import Skeleton from "@material-ui/lab/Skeleton";
import { productsList } from "../../api/products";

import Table from "./Table";

function Body() {
  const [menus, setMenu] = useState([]);
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await productsList();
      setMenu(res?.data);
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
        {menus?.length
          ? menus.map((menu, index) => (
              <div
                className="mx-4 cursor-pointer"
                onClick={() => setKey(index)}
              >
                <p
                  className={`text-center font-weight-bold text-xs mt-2 mb-1 ${
                    key == index ? "text-yellow-400" : ""
                  }`}
                >
                  {menu?.title}
                </p>
                {key === index && (
                  <div className="h-4 w-full">
                    <img src={select} className="w-4 h-full  object-center " />
                  </div>
                )}
              </div>
            ))
          : null}
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
          : menus?.length
          ? menus[key]?.items?.map((data) => <Table data={data} />)
          : null}
      </div>
    </div>
  );
}

export default Body;
