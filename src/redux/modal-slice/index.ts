import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
    openAuthorizationModal:boolean;

}

const initialState:InitialStateType = {
    openAuthorizationModal:false,
}
const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        setOpenAuthorizationModal(state){
            state.openAuthorizationModal  = !state.openAuthorizationModal;
        }
    }
    
})

export const {setOpenAuthorizationModal} = modalSlice.actions;
export default modalSlice.reducer