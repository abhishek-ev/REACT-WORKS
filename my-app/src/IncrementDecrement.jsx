import React, { useState } from 'react'

function IncrementDecrement() {
  const [number, update] = useState(1)
  function update1() {
    update(number + 1)
  }
  function update2() {

    if (number <=0) {
                    
      alert("Maximum limit reached")  
    }
    else{
      update(number-1)  
    }
  
    
                  
                  
         
  }


  return (
    <div>
      <h1 style={{ color: 'black' }}>{number}</h1>
      <button onClick={update1}>increment</button>
      <button onClick={update2}>decrement</button>
    </div>
  )
}

export default IncrementDecrement
