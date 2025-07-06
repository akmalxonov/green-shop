import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  openAuthorizationModal: boolean;
  openLogOutModal: boolean;
  openOrderModal: boolean;
  openMoreInfoModal: string | false; 
}

const initialState: InitialStateType = {
  openAuthorizationModal: false,
  openLogOutModal: false,
  openOrderModal: false,
  openMoreInfoModal: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenAuthorizationModal(state) {
      state.openAuthorizationModal = !state.openAuthorizationModal;
    },
    setOpenLogOutModal(state, action) {
      state.openLogOutModal = action.payload;
    },
    setOpenOrderModal(state, action) {
      state.openOrderModal = action.payload;
    },
    setOpenMoreInfoModal(state, action) {
      state.openMoreInfoModal = action.payload;
    },
  },
});

export const {
  setOpenAuthorizationModal,
  setOpenLogOutModal,
  setOpenOrderModal,
  setOpenMoreInfoModal,
} = modalSlice.actions;
export default modalSlice.reducer;
