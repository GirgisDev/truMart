import { getProductsAPI } from "../utils/api";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const receiveProducts = products => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export function getProducts(pageNum) {
  return dispatch => {
    return getProductsAPI(pageNum).then(products => {
      dispatch(receiveProducts(products));
    })
  }
}