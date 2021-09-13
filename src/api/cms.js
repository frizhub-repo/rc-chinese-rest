import axiosIntance from "../utils/axios-configure";

export const getSocialImages = () => {
  return axiosIntance.get("/api/v1/cms/social-accounts-images/public");
};
