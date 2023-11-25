import React from 'react'
import { useState } from 'react'

function DarkMode() {
const [darkmode, setdarkmode] = useState(false)
function toggleDarkMode(){
   setdarkmode(!darkmode)}
  return (
    <div>
     <div className={darkmode ? 'bg-dark text-light text-center p-4' : 'bg-light text-dark text-center p-4'}>
      <h1 className='display-1'>hii friends  ...</h1>
      </div>
      <div className='text-center my-5'>
       <button onClick={toggleDarkMode}>{darkmode ? 'Light mode':'Dark mode'}</button>
       </div>
    </div>
  )}


export default DarkMode
