import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useBoundStore = create(
  persist(
    (set) => ({
      items: [],
      addQuantityProduct: (id) => (state) => {
        console.log(id);
        const updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
        set({ items: updatedItems });
      },

      addProduct: (product) =>
        set((state) => ({ items: [...state.items, product] })),
    }),
    {
      name: "cartstorage-cache",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
