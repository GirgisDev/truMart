import { getInitialData } from "../../utils/api";
import { receiveProducts } from "./products.action";
import { receiveDepartments } from "./departments.action";
import { toggleLoading } from "./loading.action";


export function handleInitialData() {
  return dispatch => {
    dispatch(toggleLoading(true));
    return getInitialData().then(({products, departments}) => {
      dispatch(receiveProducts(products));
      dispatch(receiveDepartments(departments));
      dispatch(toggleLoading(false));
    })
  }
}