import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export const getApiProductsById = async (
  id: string
):Promise<AxiosResponse<Product>> => {
  return await api.get(`/products/${id}`);
};