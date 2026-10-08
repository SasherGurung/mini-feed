import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/lib/services/user.service";
import { User } from "../types/user.types";

export const auth = {
  useLogin: () =>
    useMutation<User, Error, { username: string; password: string }>({
      mutationFn: ({ username, password }) => loginUser(username, password),
    }),
};