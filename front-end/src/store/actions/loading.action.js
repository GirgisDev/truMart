export const TOGGLE_LOADING = "TOGGLE_LOADING";

export const toggleLoading = loading => {
  return {
    type: TOGGLE_LOADING,
    loading: { current: loading }
  }
}