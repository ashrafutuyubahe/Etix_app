
import { configureStore } from "@reduxjs/toolkit";
import  appReducer  from "../appSlice/appSlices";


export const store = configureStore({
    reducer:appReducer
})