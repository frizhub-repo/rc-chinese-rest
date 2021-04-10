import axiosIntance from "../utils/axios-configure";

export const productsList = () => {
  return axiosIntance.get("/api/v1/products/category/public");
};
