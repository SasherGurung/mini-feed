import { User } from "@/lib/types/user.types";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  setAuth: (user: User) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  setAuth: (user) =>
    set({
      user,
      accessToken: user.accessToken,
    }),

  clearAuth: () =>
    set({
      user: null,
      accessToken: null,
    }),
}));