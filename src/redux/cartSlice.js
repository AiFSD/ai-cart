import { createSlice } from "@reduxjs/toolkit";

const initialState = {

     items:[]
}

const cartSlice = createSlice({
     name:"addToCart",
     initialState,
     reducers : {
addTo : (state , action ) => {
     state.items.push(action.payload)
}
     }
})
export const {addTo} = cartSlice.actions
export default cartSlice.reducer;