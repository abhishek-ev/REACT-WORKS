import React from 'react'

function SpreadOperator() {

const array1=[1,2,3,4]
const array2=[1,2,3,5]
const array3=[...array1]
const array4=[...array1, ...array2]
console.log(array3)
console.log(array4)

const obj1={a:1,b:2}
const obj2={...obj1}
console.log(obj2)

  return (
    <div>
      
    </div>
  )
}

export default SpreadOperator
