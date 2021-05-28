
export const gradientsReducer = (state, action) => {

  switch (action.type) {

    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        gradientList: action.payload,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case "INIT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      }
    default:
      throw new Error(`Unsupported action type ${action.type}`)
  }
}
