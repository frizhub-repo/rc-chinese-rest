import axiosIntance from "../utils/axios-configure";

export const addContactUs = (payload) => {
  return axiosIntance.post("/api/v1/contact_us/customers", payload);
};

export const reserveTable = (payload) => {
  return axiosIntance.post("/api/v1/reservations/create/customers", payload);
};

export const updateCustomerInfo = (payload) => {
  return axiosIntance.patch("/api/v1/customers", payload);
};

export const getReservationsList = () => {
  return axiosIntance.get("/api/v1/reservations/customers");
};

export const addDeliveryAddress = (payload) => {
  return axiosIntance.patch("/api/v1/customers/add-delivery-address", payload);
};

export const getDeliveryAddressList = () => {
  return axiosIntance.get("/api/v1/customers/delivery-address-list");
};

export const deleteAddressById = (id) => {
  return axiosIntance.patch(`/api/v1/customers/delivery-address/${id}`, {
    isDeleted: true,
  });
};

export const updateAddressById = (id, payload) => {
  return axiosIntance.patch(
    `/api/v1/customers/delivery-address/${id}`,
    payload
  );
};
export const getDeliverableMenus = () => {
  return axiosIntance.get("/api/v1/menu/deliverables/customers/public");
};
