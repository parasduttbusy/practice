import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./couterState/counterSlice";
export default configureStore({
    reducer:{
        counter: counterSlice
    }
})