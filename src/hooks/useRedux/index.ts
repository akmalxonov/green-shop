import {useDispatch, useSelector,  } from "react-redux";
import type {TypedUseSelectorHook} from "react-redux"
import type { DispatchType, RootStore } from "../../redux/store";

export const useReduxSelector:TypedUseSelectorHook<RootStore>  = useSelector;
export const useReduxDispatch =() =>useDispatch<DispatchType>()