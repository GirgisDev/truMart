import { RECEIVE_DEPARTMENTS } from "../actions/departments.action";

export default function departments(state = [], action) {
  switch (action.type) {
    case RECEIVE_DEPARTMENTS:
      return [...action.departments]
    default:
      return state;
  }
}