import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiDisplay() {
    const [first, setfirst] = useState([])
useEffect(() => {
    axios.get('https://dummyjson.com/products').then((display)=>{
        setfirst(display.data.products)
    })

}, [])

   
  return (
    <div>
      {first.map((mapdisplay)=>
      <>
      <h1>{mapdisplay.brand}</h1>
      <h1>{mapdisplay.category}</h1>
      <h3>{mapdisplay.description}</h3>
      </>
      
      )}
    </div>
  )
}

export default ApiDisplay
