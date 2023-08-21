import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useBoundStore = create(
  persist(
    (set) => ({
      items: [],
      increaseQuantityProduct: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          ),
        })),
      decreaseQuantityProduct: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, qty: item.qty - 1 } : item
          ),
        })),
      addProduct: (product) =>
        set((state) => ({ items: [...state.items, product] })),
    }),
    {
      name: "cartstorage-cache",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
