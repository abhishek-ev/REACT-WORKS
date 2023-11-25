import React, { useState } from 'react'

function Map2() {
const [first, setfirst] = useState([{name:"abu",place:'clt'},{name:"multi",place:'pnr'},{name:"Abhishek",place:'knr'},{name:"abishu",place:'Home'}])

  return (
    <div>
      
      {first.map((display)=>
      <div>
      <h1 style={{color:'white'}}>{display.name}</h1>
      <p style={{color:'white'}}>{display.place}</p>
      </div>
      )}
   
    </div>
  )
}

export default Map2
