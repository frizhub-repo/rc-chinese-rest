import axiosIntance from "../utils/axios-configure";

export const addContactUs = (payload) => {
  return axiosIntance.post("/api/v1/contact_us/customers", payload);
};
