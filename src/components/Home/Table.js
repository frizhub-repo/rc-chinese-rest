import React from "react";
import Item from "./Item";

function Table({ items }) {
  return (
    <div className="w-4/5 flex flex-wrap border-t-4 border-yellow-400 border-b-4 -mt-1 z-10 px-12 bg-white ">
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
      />
      <Item
        name={"American slab"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
      />
    </div>
  );
}
export default Table;
