import React from "react";
function Item({ price, name, desc, currency }) {
  return (
    <div className="p-2 lg:w-1/2 md:w-1/2  mb-1">
      <div className="flex justify-content-between pb-1 border-b border-dotted border-black">
        <h1 className="text-left font-old text-lg">{name}</h1>
        <span className="text-right text-lg font-old">
          {currency}
          {price}
        </span>
      </div>
      <p className="mt-1 text-left w-full text-sm">{desc}</p>
    </div>
  );
}

export default Item;
