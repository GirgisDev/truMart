import { TOGGLE_LOADING } from "../actions/loading.action";

export default function loading(state = { current: false }, action) {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {...action.loading}
    default:
      return state;
  }
}