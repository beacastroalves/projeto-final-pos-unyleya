import api from "../../services/api";

export const deleteApiProduct = async (id: string, token: string) => {
  return await api.delete(`/products/${id}`, {
    headers: { Authorization: token },
  });
}