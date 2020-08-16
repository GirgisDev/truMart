import { getInitialData } from "../utils/api";
import { receiveProducts } from "./products.action";
import { receiveDepartments } from "./departments.action";


export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({products, departments}) => {
      dispatch(receiveProducts(products));
      dispatch(receiveDepartments(departments))
    })
  }
}