import { create } from "zustand";
import { persist } from "zustand/middleware";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: getInitialTheme(),
      currentProfile: "professional", 
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
      setProfile: (mode) => set({ currentProfile: mode }), 
    }),
    {
      name: "theme-storage",
    }
  )
);
