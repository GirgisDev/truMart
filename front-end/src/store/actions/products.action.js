import { getProductsAPI } from "../../utils/api";
import { toggleLoading } from "./loading.action";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const receiveProducts = products => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export function getProducts(data) {
  return dispatch => {
    dispatch(toggleLoading(true));
    return getProductsAPI(data).then(products => {
      dispatch(receiveProducts(products));
      dispatch(toggleLoading(false));
    })
  }
}