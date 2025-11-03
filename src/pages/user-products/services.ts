import api from "../../services/api";

export const getApiMyProducts = async (token: string) => {
  return await api.get("/my-products", {
    headers: {
      Authorization: token,
    },
  });
};