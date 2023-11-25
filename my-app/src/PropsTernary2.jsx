import React from 'react'

function PropsTernary2({val}) {

  return (
    <div>
      <h1>age is {val}</h1>
      <h2>{val>=18 ? "adult" :"minor"}</h2>
    </div>
  )
}

export default PropsTernary2
