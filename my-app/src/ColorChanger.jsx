import React, { useState } from 'react'
 

function ColorChanger(){
  const [Color, setColor] = useState('black');

  const [primary, primaryColor] = useState('black');

  function changeColor(color) {
    setColor(color);
    
  }

  

  return (
   
    <div >
    
 <h1 style={{ color: Color ,textAlign:'center',marginTop:'200px' ,fontWeight:'bold', textShadow: '-1px 0 black,0 1px black,1px 0 black,0 -1px black'}}>Choose any of the colour to change this text color</h1>
 <div style={{marginLeft:'700px',marginTop:'50px'}}>
      <button style={{backgroundColor:"red", color:'white',borderRadius:'100px'}} onClick={() => changeColor('red') }>Red</button>
      <button style={{backgroundColor:"blue", color:'white',borderRadius:'100px'}} onClick={() => changeColor('blue')}>Blue</button>
      <button style={{backgroundColor:"green", color:'white',borderRadius:'100px'}} onClick={() => changeColor('green')}>Green</button>
      <button style={{backgroundColor:"purple", color:'white',borderRadius:'100px'}} onClick={() => changeColor('purple')}>Purple</button>
      </div>

<h1 style={{ color: primary ,textAlign:'center',marginTop:'200px' ,fontWeight:'bold', textShadow: '-1px 0 black,0 1px black,1px 0 black,0 -1px black'}}>Choose any of the colour to change this text color</h1>
      <div style={{marginLeft:'700px',marginTop:'50px'}}>
      <button style={{backgroundColor:"red", color:'white',borderRadius:'100px'}} onClick={() => primaryColor('red') }>Red</button>
      <button style={{backgroundColor:"blue", color:'white',borderRadius:'100px'}} onClick={() => primaryColor('blue')}>Blue</button>
      <button style={{backgroundColor:"green", color:'white',borderRadius:'100px'}} onClick={() => primaryColor('green')}>Green</button>
      <button style={{backgroundColor:"purple", color:'white',borderRadius:'100px'}} onClick={() => primaryColor('purple')}>Purple</button>
      </div>
    </div>
  );
};



export default ColorChanger



