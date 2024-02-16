import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import accountReducer from './reducers/AccountSlice';

const store = configureStore({
    reducer : {
        user : userReducer,
        userBankAccount: accountReducer
    },
    devTools : true,
});

export default store;