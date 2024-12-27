import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductState} from "../../helpers/ts_helpers";
import { AxiosRequestConfig } from "axios";
import ApiRequest from "../../helpers/api_request";

const initialState:ProductState={
    products: [],
    pending : false,
    error: undefined,
    activeProduct : null
}

export const getProducts = createAsyncThunk(
    '/getProducts',
    async (options:AxiosRequestConfig, thunkAPI) =>{
        let res = await ApiRequest(options);
        return res;
    }
)

export const getSingleProduct = createAsyncThunk(
    '/getSingleProduct',
    async (options: AxiosRequestConfig, thunkAPI)=>{
        let res = await ApiRequest(options);
        return res;
    }
)

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.pending = false;
            state.products = action.payload.products;
        })
        .addCase(getProducts.pending, (state)=>{
            state.pending = true;
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.pending= false;
            state.error = action.error.message;
        })
        .addCase(getSingleProduct.fulfilled, (state, action)=>{
            state.pending = false;
            state.activeProduct= action.payload.details;
        })
        .addCase(getSingleProduct.pending, (state)=>{
            state.pending = true;
        })
        .addCase(getSingleProduct.rejected, (state, action)=>{
            state.pending= false;
            state.error = action.error.message;
        })
    }
})

export default productsSlice.reducer;