import React, { useState } from 'react'

function SpreadText() {
    const [first, setfirst] = useState({name:"abu",age:"21"})


    function setfirst1(){
        setfirst({...first,age:'30'})
    }
  return (
    <div>
        <h1>{first.name} is {first.age} years old</h1>
      <button onClick={setfirst1}>Button</button>
    </div>
  )
}

export default SpreadText
