import {configureStore} from "@reduxjs/toolkit"
import modalSlice from "../modal-slice"
import cardSlice  from "../shopSlice"
export const store = configureStore({
    reducer:{
        modalSlice,
        cardSlice   
    }
})

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>