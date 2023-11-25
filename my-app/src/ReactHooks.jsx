import React, { useState } from 'react'

function ReactHooks() {
    const [first, setfirst] = useState("Abishek")
    function sample(){
        setfirst("abu")
    }
    const [Second,SetSecond] = useState("raju")


   
    
    
  return (
    <div style={{background:'white'}}>
      <h1 style={{color:'blue'}}>{first}</h1>
      <button style={{color:'blue'}} onClick={sample}>Click here to change</button>
      <h1 style={{color:'Red'}}>{Second}</h1>
      <button style={{color:'Red'}} onClick={()=>SetSecond("Radha")}>Click here to change</button>

     

    </div>

    

    
  )
}

export default ReactHooks
