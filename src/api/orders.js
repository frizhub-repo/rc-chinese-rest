import axiosInstance from "../utils/axios-configure";

export const createOrder = (payload) => {
  return axiosInstance.post("/api/v1/orders/customers", payload);
};

export const getOrders = (payload) => {
  return axiosInstance.get("/api/v1/orders/customers");
};

export const getOrderById = (orderId) =>
  axiosInstance.get(`/api/v1/orders/${orderId}`);
