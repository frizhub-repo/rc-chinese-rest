import React from "react";
import Item from "./Item";

function Table({ data }) {
  return (
    <>
      <h2
        className="text-gray-900 text-lg text-left font-weight-bold"
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        {data?.name}
      </h2>
      <div className=" flex flex-wrap   border-yellow-400 border-b-4  z-10 -mt-1    ">
        {data?.products?.length
          ? data?.products?.map((product) => (
              <Item
                name={product?.title}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
                  "pulvinar facilisis justo mollis"
                }
                price={product?.price}
              />
            ))
          : null}
        {/* <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
        price={15}
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
        price={15}
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
        price={15}
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
        price={15}
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
        price={15}
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
        price={15}
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
        price={15}
      /> */}
      </div>
    </>
  );
}
export default Table;
