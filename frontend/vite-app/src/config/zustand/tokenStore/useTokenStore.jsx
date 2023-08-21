import { create } from 'zustand'

export const useTokenStore = create((set) => ({
  token: "",
  updateToken: (action) => set((state) => ({ token: action })),
}))