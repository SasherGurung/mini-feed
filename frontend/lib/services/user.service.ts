import { api } from "../api/axios";
import { User } from "../types/user.types";

export const loginUser = async (
  username: string,
  password: string,
): Promise<User> => {
  const { data } = await api.post<User>("/auth/login", { username, password });
  return data;
};