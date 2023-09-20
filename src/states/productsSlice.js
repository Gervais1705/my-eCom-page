import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseApi from "./Api/baseApi";

export const fetchedAsyncProducts = createAsyncThunk('products/fetchedAsyncProducts', async () => {
    const response = await baseApi.get('/products')
    return response.data;
});
export const fetchedAsyncProduct = createAsyncThunk('product/fetchedAsyncProduct', async (id) => {
    const response = await baseApi.get(`/products/${id}`)
    return response.data;
});

const initialState = {
    products: [],
    product:{},
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        removeDetails: (state)=>{
            state.product = {};
        }
    },
    extraReducers:{
        [fetchedAsyncProducts.pending]: ()=>{
            console.log("movie is loading");
        },
        [fetchedAsyncProducts.fulfilled]: (state, {payload})=>{
            console.log("fetched successfully");
            return {...state, products:payload};
        },
        [fetchedAsyncProduct.fulfilled]: (state, {payload})=>{
            console.log("fetched successfully");
            return {...state, product:payload};
        },
        [fetchedAsyncProducts.rejected]: () =>{
            console.log("rejected");
        },
        
}
}
)

export const {removeDetails } = productsSlice.actions;
export const getAllProducts = state => state.products.products;
export const getProduct = state => state.products.product;;
export default productsSlice.reducer;