import React, { useState } from 'react'
import Porps2 from './Porps2'

function Props() {

const [first, setfirst] = useState("Hiii Hello Iam Props")
const obj1={name:"Rahul",age:"23"}

const array1=[1,2,3,4,56,7]
const array2=[{name:"abu",age:"43"},{name:"shek",age:"63"}]

  return (



    <div>

      <Porps2 val={first} val2={obj1} val3={array1} val4={array2}/>
    
    </div>
  )
}

export default Props
