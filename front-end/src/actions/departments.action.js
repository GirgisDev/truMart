export const RECEIVE_DEPARTMENTS = "RECEIVE_DEPARTMENTS";

export const receiveDepartments = departments => {
  return {
    type: RECEIVE_DEPARTMENTS,
    departments
  }
}