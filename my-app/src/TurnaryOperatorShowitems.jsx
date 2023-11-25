import React, { useState } from 'react'
import CardMap from './CardMap'



function TurnaryOperatorShowitems() {
  const [first, setfirst] = useState(false)

  function setitems() {
    // if (first) {
    //   window.location.href = 'https://www.google.com/'
    // }
    // else {
    //   setfirst(!first)
    // }

    // {first ? window.location.href = 'https://www.google.com/': setfirst(!first)}
  }

  return (
    <div>
      {/* {first ? <h1>Click the button to visit the google</h1> : ''} */}
      {first ?<CardMap/>:""}

      <button onClick={()=>{setfirst(!first)}}>{first ? "go to google":"show the text"}</button>
    </div>



  )
}

export default TurnaryOperatorShowitems
