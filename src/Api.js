import { useState, useEffect } from "react"


export function fetchJoke() {
  fetch(`${process.env.REACT_APP_API_URL}/gradients`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("météo untrouvable")
      }
      return response.json()
    })

    .then((data) => {
      console.log(data)
    })

    .catch((error) => {
      alert(error.message)
    })
}













