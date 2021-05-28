// ???? est-ce bon ???

/*
import { createContext, useContext } from "react"

export const TodosDispatchContext = createContext()

export const useTodosDispatch = () => {
  const context = useContext(TodosDispatchContext)
  if (context === undefined) {
    throw new Error(
      `You should use useTodosDispatch only within the TodosDispatchContext.Provider`
    )
  }
  return context
}

import { useParams } from "react-router-dom"

function Product() {
  const params = useParams()
  console.log(params)
  const { id } = params
  return (
    <>
      <h2>Product with id: {id}</h2>
      <Gradient
        key={name}
        colorStart={start}
        colorEnd={end}
        name={name}
        tags={tags}
      />
    </>
  )
}

*/