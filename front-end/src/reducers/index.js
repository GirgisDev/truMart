import { combineReducers } from "redux";
import products from "./products.reducer";
import departments from "./departments.reducer";

export default combineReducers({ products, departments })