import React, { useState } from 'react'

function SpreadMap() {
const [first, setfirst] = useState([{car:"Porcshe", colour:"yellow"},{car:"BMW", colour:"White"}])

const array1=[{car:"Volvo",colour:"red"},{car:"Benz Maybach",colour:"Black"}]

const obj1={car:"GMC",colour:"toffie"}

function setfirst1(){
    setfirst([...first ,...array1])
}
function setfirst2(){
    setfirst([...first ,...array1, obj1])
}

  return (
    <div> 
      <table>
        <tr>
            <th>Car</th>
            <th>Colour</th>
        </tr>
        {first.map((display)=>(
        <tr>
<td>{display.car}</td>
<td>{display.colour}</td>
</tr>
))}
</table>
<button onClick={setfirst1}>button</button><br></br>
<button onClick={setfirst2}>button obj</button>
  
    </div>
  )
}

export default SpreadMap
