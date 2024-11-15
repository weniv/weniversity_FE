import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: (userData, token) =>
        set({
          user: userData,
          token,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),

      updateUser: (userData) =>
        set({
          user: { ...userData },
        }),
    }),
    {
      name: "auth-storage", // localStorage에 저장될 키 이름
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
