import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export const getApiAllProductsRecents = async ():Promise<AxiosResponse<Product[]>>  => {
  return await api.get("/products/recents-all");
};