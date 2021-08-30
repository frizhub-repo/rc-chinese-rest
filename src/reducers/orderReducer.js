const initialState = {
  total: 0,
  products: [],
  time: "as soon as possible",
  note: "",
  minimum: 0,
  delivery: 0,
  currency: "€",
  address: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const index = state.products.findIndex(
        (e) =>
          e.product === action.payload.product &&
          e.size._id === action.payload.size._id &&
          e.isDiscount === action.payload.isDiscount
      );
      if (index !== -1) {
        const products = state.products;
        products[index].quantity =
          products[index].quantity + action.payload.quantity;
        return { ...state, products };
      } else
        return {
          ...state,
          products: state.products.concat(action.payload),
        };
    case "ADD_DELIVERY_TIME":
      return {
        ...state,
        time: action.payload.time,
        note: action.payload.note ? action.payload.note : "",
      };
    case "ADD_ORDER_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "REMOVE_ITEM":
      const removeProducts = state.products;
      const removeIndex = removeProducts.findIndex(
        (product) => product.product === action.payload.key
      );
      const price =
        removeProducts[removeIndex].quantity *
        removeProducts[removeIndex].price;
      if (removeIndex > -1) removeProducts.splice(removeIndex, 1);
      return {
        ...state,
        products: removeProducts,
        total: state.total - price,
      };
    case "ADD_QUANTITY":
      const addProducts = state.products;
      const addQuantityIndex = addProducts.findIndex(
        (product) => product.product === action.payload.key
      );
      addProducts[addQuantityIndex].quantity =
        addProducts[addQuantityIndex].quantity + 1;
      return {
        ...state,
        products: addProducts,
        total: state.total + addProducts[addQuantityIndex].price,
      };
    case "REMOVE_QUANTITY":
      const updatedProduct = state.products.filter(
        (value) => value.product !== action.payload.key.product
      );
      const removeQuantityIndex = state.products.findIndex(
        (product) => product.product === action.payload.key.product
      );
      return {
        ...state,
        products: updatedProduct,
        total:
          state.total -
          state.products[removeQuantityIndex].price *
            state.products[removeQuantityIndex].quantity,
      };
    case "TOTAL":
      return {
        ...state,
        total: state.total + action.payload,
      };
    case "ADD_CURRENCY":
      return {
        ...state,
        currency: action.payload,
      };

    case "REMOVE_ORDER_ITEMS":
      return {
        ...state,
        products: [],
        total: 0,
      };
    default:
      return state;
  }
}
