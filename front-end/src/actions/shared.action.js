import { getInitialData } from "../utils/api";
import { receiveProducts } from "./products.action";
import { receiveDepartments } from "./departments.action";


export function handleInitialData(pageNum) {
  return dispatch => {
    return getInitialData(pageNum).then(({products, departments}) => {
      dispatch(receiveProducts(products));
      dispatch(receiveDepartments(departments))
    })
  }
}