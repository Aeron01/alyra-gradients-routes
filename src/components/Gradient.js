import { useContext } from "react"
import GradientTitle from "./GradientTitle"
import GradientPill from "./GradientPill"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"
import { FilterContext } from "./context/FilterContext"
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom"

const Gradient = ({ colorStart, colorEnd, name, tags }) => {
  const { filter } = useContext(FilterContext)
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} filter={filter} />
        <button type="button" className={`btn btn-outline-dark w-100`}>Plein écran</button>
      </div>
    </li>
  )
}

export default Gradient