import { useState, useEffect, useReducer, createContext } from "react"
import { gradientsReducer } from "../useReducer/gradientsReducer"

// créer et exporter ("named") FilterContext object
export const FilterContext = createContext()

/* le component-provider qui embrassera la partie de notre app où on utilise ce context */
export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all")

  const initialState = {
    gradientList: [],
    loading: false,
    error: "",
    page: 1,
    hasNext: null,
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/gradients`)
      .then((response) => {
        dispatch({ type: "FETCH_INIT" });
        if (!response.ok) {
          throw new Error(`Gradient register cannot be read, status : ${response.status} `);
        }
        return response.json()
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        console.log(data)
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      });
  }, []);

  const [state, dispatch] = useReducer(gradientsReducer, initialState)
  const { gradientList, loading } = state;

  return (
    <FilterContext.Provider value={{ gradientList, loading, filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}