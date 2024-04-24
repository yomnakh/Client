import { configureStore } from "@reduxjs/toolkit";
import cvSlice from "./slices/cv.slice";


export const store = configureStore({
    reducer: {
        cv:cvSlice
    },
}) 