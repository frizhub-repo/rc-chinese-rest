import axiosIntance from "../utils/axios-configure";
import { GET_PRODUCT_BY_CATEGORY } from "../utils/types";

export const getProductByCategory = () => async (dispatch) => {
  const res = await axiosIntance.get("/api/v1/product/customers/public");
  if (res?.status === 200) {
    dispatch({ type: GET_PRODUCT_BY_CATEGORY, payload: res?.data });
  }
};
