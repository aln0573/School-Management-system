import { api } from "../api";
import {LoginPayload} from "./types/auth.type"

export const loginUser = async (data: LoginPayload) => {
  const response = await api.post("/api/auth/login", data);
  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/api/auth/me");
  return response.data.user;
};

export const logoutUser = async () => {
  const response = await api.post("/api/auth/logout");
  return response.data;
};