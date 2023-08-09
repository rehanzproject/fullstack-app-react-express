export const createTokenSlice = (set) => ({
  token: "",
  updateToken: (action) => {
    console.log(action);
    set({ token: action });
  },
});
