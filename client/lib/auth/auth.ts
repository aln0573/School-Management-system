import { api } from "../api";

export type LoginPayload = {
  email: string;
  password: string;
};

export const loginUser = async (data: LoginPayload) => {
  const response = await api.post("/api/users/login", data);
  return response.data;
};
