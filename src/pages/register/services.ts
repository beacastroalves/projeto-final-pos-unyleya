import api from "../../services/api";
import type { RegisterForm } from "./types";

export const registerUser = async (values: RegisterForm) => {
  return await api.post("/register", {
    name: values.name,
    email: values.email,
    phone: values.phone,
    city: values.city,
    state: values.state,
    password: values.password,
  });
};