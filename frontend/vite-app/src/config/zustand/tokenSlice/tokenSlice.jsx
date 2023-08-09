export const createTokenSlice = (set) => ({
  token: "",
  updateToken: (action) => set({ token: action }),
});
