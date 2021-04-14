import axiosIntance from "../utils/axios-configure";

export const addContactUs = (payload) => {
  return axiosIntance.post("/api/v1/contact_us/customers", payload);
};

export const reserveTable = (payload) => {
  return axiosIntance.post("/api/v1/reservations/create/customers", payload);
};

export const addDeliveryAddress = (payload) => {
  return axiosIntance.patch("/api/v1/customers/add-delivery-address", payload);
};

export const updateCustomerInfo = (payload) => {
  return axiosIntance.patch("/api/v1/customers", payload);
};

export const getReservationsList = () => {
  return axiosIntance.get("/api/v1/reservations/customers");
};
