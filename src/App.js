//import React, { useEffect } from "react"
import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { FilterContextProvider } from "./components/context/FilterContext"
//import { fetchJoke } from "./Api"

function App() {


  /* //rajout par stef
  useEffect(() => {
    fetchJoke();
  }, [api]);*/



  return (
    <div className="App min-vh-100 d-flex flex-column">
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <FilterContextProvider>
          <Gradients />
        </FilterContextProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App