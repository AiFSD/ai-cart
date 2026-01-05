import { createSlice } from "@reduxjs/toolkit";
import { beveragesData } from "../datas/beveragesData";
import { dairyData } from "../datas/dairyData";
import { fruitsData } from "../datas/fruits";
import { grainsData } from "../datas/grains";
import { vegetables } from "../datas/vegData";


const initialState = {
    allProducts: [
        ...vegetables,
        ...beveragesData,
        ...dairyData,
        ...fruitsData,
        ...grainsData,
    ],
    offerProducts:[]
}

const productSlice = createSlice({
    name: "offer",
    initialState,
    reducers: {
        loadOffer: (state) => {
            state.offerProducts = state.allProducts.filter((item) => item.offer > 10)
       }
    }
})
export const {loadOffer} = productSlice.actions
export default productSlice.reducer
