import React from 'react'

function Destructuring() {

    const person={name:'abu' , age:20, place:'knr'}

    {/*const Name=person.name;
    const age=person.age;
    const place=person.place */}
 

    const{name,age,place}=person
    console.log(name);
    console.log(age);
console.log(place);



    const number=[1,2,3,4]
    const[first,second,third,four]=number;
    console.log(first);
    console.log(third);
    console.log(four);
    console.log(second);
  return (
    <div>
     
    </div>
  )
}

export default Destructuring
