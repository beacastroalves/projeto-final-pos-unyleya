import api from "../../services/api";

export const auth = async (email: string, password: string) => {
  return await api.post("/auth", {
    email: email,
    password: password,
  });
};