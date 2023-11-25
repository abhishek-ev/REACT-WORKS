import React, { useState } from 'react'
import PropsTernary2 from './PropsTernary2'

function PropsTernary() {
    //const [first, setfirst] = useState(18)
    let age = prompt("What is your age?");

  return (
    <div>
        {/*<PropsTernary2 val={first}/>*/}
      <PropsTernary2 val={age}/>
    </div>
  )
}

export default PropsTernary
