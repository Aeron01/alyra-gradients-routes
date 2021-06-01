import { useContext } from "react"
import Gradient from "./Gradient"
import { FilterContext } from "./context/FilterContext"

const GradientsList = () => {
  const { filter, gradientList, /*loading*/ } = useContext(FilterContext)
  const list = gradientList.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <>
      <ul className="row list-unstyled">
        {list.map((el) => {
          const { end, id, name, start, tags = [] } = el
          return (
            <Gradient
              colorStart={start}
              colorEnd={end}
              name={name}
              tags={tags}
              key={id}
              id={id}
            />
          )
        })}
      </ul>
    </>
  )
}
//{loading && <p className="text-center">loading... </p>}

export default GradientsList
