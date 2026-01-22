import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      
     products: JSON.parse(localStorage.getItem("cartitems")) || []
}

const cartSlice = createSlice({
     name:"addToCart",
     initialState,
     reducers:{
          addLogic : (state , action ) => {
               const existing = state.products.find((p) => p.id === action.payload.id)
               if(existing) {
                    existing.quantity += 1
               } else {
state.products.push({
     ...action.payload ,
     quantity: 1
})
               }
               localStorage.setItem("cartitems", JSON.stringify(state.products) )
          },
          increaseQty : (state , action) => {
             const item =   state.products.find(product => product.id == action.payload)
             if(item) {
          item.quantity += 1
             }
              localStorage.setItem("cartitems", JSON.stringify(state.products) )
          },
          decreaseQty : (state , action ) => {
             const item =  state.products.find(product => product.id == action.payload)
               if(item && item.quantity > 1){
item.quantity -=1
               } else {

      state.products = state.products.filter(p => p.id !== action.payload);
    }
      localStorage.setItem("cartitems", JSON.stringify(state.products) )
          }
          ,
          removeLogic:(state , action ) => {
      state.products = state.products.filter(product => product.id !== action.payload)
          localStorage.setItem("cartitems", JSON.stringify(state.products) )
          }
     }
})

export default cartSlice.reducer
export const { addLogic , removeLogic , increaseQty , decreaseQty} = cartSlice.actions