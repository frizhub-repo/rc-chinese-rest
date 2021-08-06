import axiosIntance from "../../utils/axios-configure";
const getDeliverableMenus = () => {
  return axiosIntance.get("/api/v1/menu/deliverables/customers/public");
};
export default getDeliverableMenus;
