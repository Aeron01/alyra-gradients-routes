import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
  <Router>
     <Switch>
        <Route exact path="/" component={App} />
    <App />
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
  )
  //<Route exact path="/gradient/:id" component={vers votre component ou page oÃ¹ il y aura useParams et l'id } />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
