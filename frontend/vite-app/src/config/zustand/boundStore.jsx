import { create } from "zustand";
import { createTokenSlice } from "./tokenSlice/tokenSlice";
export const useBoundStore = create((...a) => ({
  ...createTokenSlice(...a),
}));
