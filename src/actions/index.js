export const setTotal = (price) => {
  return {
    type: "TOTAL",
    payload: price,
  };
};

export const addItem = (item) => {
  return { type: "ADD_ITEM", payload: item };
};
export const removeItem = (key) => {
  return { type: "REMOVE_ITEM", payload: key };
};

export const removeOrderItems = () => {
  return { type: "REMOVE_ORDER_ITEMS" };
};

export const addQuantity = (product) => {
  return { type: "ADD_QUANTITY", payload: product };
};

export const removeQuantity = (product) => {
  return { type: "REMOVE_QUANTITY", payload: product };
};
