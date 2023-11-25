import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [first, setfirst] = useState("Carzz")
useEffect(() => {
 alert("Name Upadte")
}, [first])


  return (
    <div>
      <h1>Use Effect</h1>
      <h2>{first}</h2>
      <button style={{color:"red"}} onClick={()=>setfirst("Bikzz")}>Button</button>
    </div>
  )
}

export default UseEffect
