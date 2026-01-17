import { api } from "../api";
import {LoginPayload} from "./types/auth.type"

export const loginUser = async (data: LoginPayload) => {
  const response = await api.post("/api/auth/login", data);
  return response.data;
};
