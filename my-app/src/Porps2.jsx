import React from 'react'

function Porps2({val,val2,val3,val4}) {
   
  return (
    <div>
      <h1>{val}</h1>
      <h2>{val2.name}</h2> 
      <h3>{val3}</h3>
      <h4>{val4[0].name}</h4>
      <h1>{val4.map((display)=>(
        display.name
      ))}</h1>
    </div>
  )
}

export default Porps2
