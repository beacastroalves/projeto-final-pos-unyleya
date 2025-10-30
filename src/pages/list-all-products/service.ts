import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export const getApiAllProducts = async ():Promise<AxiosResponse<Product[]>>  => {
  return await api.get("/products");
};

export const getApiAllProductsOrdered = async (typeOrder: "descending" | "ascending"):Promise<AxiosResponse<Product[]>>  => {
  return await api.get(`/products?order=${typeOrder}`);
};