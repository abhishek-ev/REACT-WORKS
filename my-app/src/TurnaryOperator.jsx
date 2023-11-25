import React, { useState } from 'react'

function TurnaryOperator() {
const [first, setfirst] = useState(false)

  return (
    <div>
      <h1 >{first ? "here we go" : ""}</h1>
      
      <button onClick={()=>setfirst(!first)} > {first ?"hide": "show" }</button>
    </div>
  )
}

export default TurnaryOperator
