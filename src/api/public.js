import axiosIntance from "../utils/axios-configure";

export const getGoogleMyBusinessLocations = () => {
  return axiosIntance.get("/api/v1/my_business/locations/public");
};

export const productsByCategory = () => {
  return axiosIntance.get("/api/v1/products/category/public");
};
