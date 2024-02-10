import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducers } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducers } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

const rootReducers = combineReducers({
    auth:authReducers,
    allProduct:customerProductReducer,
    cart:cartReducers,
    order:orderReducer,
})

export const store= legacy_createStore(rootReducers,applyMiddleware(thunk))