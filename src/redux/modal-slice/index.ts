import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  openAuthorizationModal: boolean;
  openLogOutModal: boolean;
}

const initialState: InitialStateType = {
  openAuthorizationModal: false,
  openLogOutModal: false,
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
  },
});

export const { setOpenAuthorizationModal,setOpenLogOutModal } = modalSlice.actions;
export default modalSlice.reducer;
