import { configureStore } from "@reduxjs/toolkit";
import offerreducer from "./productSlice"
import add from "./cartSlice"

const store = configureStore({
    reducer: {
        offer : offerreducer,
        addLogic : add
    }
})

export default store;