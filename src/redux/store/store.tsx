import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../slices/ProductSlice';
import userReducer from '../slices/userSlice';

const store = configureStore({
    reducer : {
        products : productsReducer,
        user : userReducer
    }
})

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

