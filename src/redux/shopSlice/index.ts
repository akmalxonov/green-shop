import { createSlice } from "@reduxjs/toolkit";
import type { ProductTypeLocal } from "../../@types";
import { getLocal, setLocal } from "../../generic/local";
import { notificationApi } from "../../generic/notificationApi";

// Types
interface InitialStateType {
  data: ProductTypeLocal[];
  coupon:number;  
}

const initialState: InitialStateType = {
  data: getLocal("shop") || [],
  coupon:0,
};
const notify = notificationApi();

const cardSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getData(state, { payload }) {
      if (state.data.find((value) => value?._id === payload._id)) {
        state.data = state.data.map((value) => {
          if (value?._id === payload._id) {
            return {
              ...value,
              count: (value.count += 1),
              userPrice: value.price * value.count,
            };
          }
          return value;
        });
        setLocal("shop", state.data);
        return;
      }
      state.data = [
        ...state.data,
        { ...payload, count: 1, userPrice: payload.price },
      ];
      setLocal("shop", state.data);
      notify("product_add");
    },
    deleteData(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload);
      setLocal("shop", state.data);
      notify("detete_card")
    },
    increment(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload
          ? {
              ...value,
              count: (value.count += 1),
              userPrice: value.price * value.count,
            }
          : value
      );
      setLocal("shop",state.data)
    },
    decrement(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload
          ? {
              ...value,
              count: value.count >=2 ? (value.count-=1):1,
              userPrice: value.price * value.count,
            }
          : value
      );
      setLocal("shop",state.data)
    },
    getCoupon(state,{payload}){
      state.coupon =  payload
    }
  },
});

export const { getData, deleteData,increment,decrement,getCoupon } = cardSlice.actions;
export default cardSlice.reducer;
