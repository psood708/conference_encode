import React from "react"

export default function Update({update}) {
  const style = {
    fontsize: "1.5rem",
    margin: "0.5rem 0",
    padding: "0 2rem",
  }
  return <p style={style}>{update}</p>
}
