import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import ApiRequest from "../../helpers/api_request";

const initialState={
    user: [],
    pending : false
}

export const getUser = createAsyncThunk(
    'getUser',
    async (options: AxiosRequestConfig, thunkAPI)=>{
        let response = await ApiRequest(options);
        return response;
    }
)

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getUser.fulfilled, (state, action)=>{
            state.pending = false;
            state.user = action.payload;
        })
    }
})

export default userSlice.reducer;