import { createSlice } from "@reduxjs/toolkit";
import type { ProductTypeLocal } from "../../@types";
import { getLocal, setLocal } from "../../generic/local";
import { notificationApi } from "../../generic/notificationApi";

// Types
interface InitialStateType {
  data: ProductTypeLocal[];
}

const initialState: InitialStateType = {
  data: getLocal("like") || [],
};
const notify = notificationApi();

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
      toggleLike(state, { payload }) {
      const exists = state.data.find((item) => item._id === payload._id);
      if (exists) {
        // Mahsulot mavjud bo‘lsa, olib tashlash
        state.data = state.data.filter((item) => item._id !== payload._id);
        notify("remove_wishlist");
      } else {
        // Yangi mahsulot qo‘shish
        state.data.push({ ...payload, count: 1, userPrice: payload.price });
        notify("add_wishlist");
      }
      setLocal("like", state.data); // localStorage key "like" bo‘lishi kerak
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
