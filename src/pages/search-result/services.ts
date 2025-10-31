import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export const getApiProductsByNames = async (
  nameProduct: string
):Promise<AxiosResponse<Product[]>> => {
  return await api.get(`/products?name=${nameProduct}`);
};