import { RECEIVE_PRODUCTS } from "../actions/products.action";

export default function products(state = {items: [], count: 0}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {...action.products}
    default:
      return state;
  }
}