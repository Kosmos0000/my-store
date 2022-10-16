import {combineReducers, configureStore} from "@reduxjs/toolkit";
import goodsReducer from "./redusers/goods-reducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
})
