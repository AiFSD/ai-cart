import { configureStore } from "@reduxjs/toolkit";
import offerreducer from "./productSlice"


const store = configureStore({
    reducer: {
        offer : offerreducer,
    
    }
})

export default store;