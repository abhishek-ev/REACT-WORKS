import React, { useState } from 'react'

function ChangeColour() {
const [first, setfirst] = useState("Colour is ....")
 
function changetext(){
  setfirst("Color is Pink")
}
function changetext1(){
  setfirst("Color is Yellow")
}
function changetext2(){
  setfirst("Color is Red")
}
function changetext3(){
  setfirst("Color is Blue")
}
function changetext4(){
  setfirst("Colour is ....")

}





  return (
    <div style={{color:'white'}}>
      <h1 style={{textAlign:"center",marginTop:'150px'}}>{first}</h1>
      <div className='textchange' style={{alignItems:'center', marginLeft:'700px',marginTop:'20px'}}>
      <button onClick={changetext} style={{alignItems:'center', backgroundColor:"pink", color:'white',borderRadius:'100px'}}>Pink</button>
      <button onClick={changetext1} style={{backgroundColor:"Yellow", color:'white',borderRadius:'100px'}}>Yellow</button>
      <button onClick={changetext2} style={{backgroundColor:"red", color:'white',borderRadius:'100px'}}>Red</button>
      <button onClick={changetext3} style={{backgroundColor:"blue", color:'white',borderRadius:'100px'}}>Blue</button>
      <button onClick={changetext4} style={{backgroundColor:"black", color:'white',borderRadius:'100px'}}>Reset</button>
      </div>

      
    </div>
  )
  }

export default ChangeColour
