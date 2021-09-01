import axiosIntance from "../utils/axios-configure";

export const getGoogleMyBusinessLocations = () => {
  return axiosIntance.get("/api/v1/my_business/locations/public");
};

export const productsByCategory = () => {
  return axiosIntance.get("/api/v1/products/category/public");
};

export const customerMenu = () =>
  axiosIntance.get("/api/v1/menu/customers/public");

export const getSpecialMenus = () =>
  axiosIntance.get("/api/v1/menu/special/customers/public");

export const getHotDeals = () =>
  axiosIntance.get("/api/v1/delivery/discount/hotdeals/public");

export const getReservationOffers = () =>
  axiosIntance.get("/api/v1/reservation/discount/public");
