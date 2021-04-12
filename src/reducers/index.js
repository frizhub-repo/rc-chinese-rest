import {combineReducers} from "redux";
import orderReducer from "./orderReducer";
import productReducer from "./productReducer";

export default combineReducers({
    orders:orderReducer,
    productReducer: productReducer,
})
