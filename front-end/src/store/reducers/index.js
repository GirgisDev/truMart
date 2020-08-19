import { combineReducers } from "redux";
import products from "./products.reducer";
import departments from "./departments.reducer";
import loading from "./loading.reducer";

export default combineReducers({ products, departments, loading })