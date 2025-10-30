import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export const getApiRecentsProducts = async ():Promise<AxiosResponse<Product[]>> => {
  return await api.get('/products/recents');
};

export const getApiRecommendedsProducts = async ():Promise<AxiosResponse<Product[]>> => {
  return await api.get('/products/recommended');
};