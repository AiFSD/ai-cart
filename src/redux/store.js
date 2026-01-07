import { configureStore } from "@reduxjs/toolkit";
import offerreducer from "./productSlice"
import add from "./cartSlice"

const store = configureStore({
    reducer: {
        offer : offerreducer,
    addTo : add
    }
})

export default store;