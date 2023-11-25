import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import React from 'react'
import NavCard from './NavCard'
import NavCard2 from './NavCard2'
import ApiGallary from './ApiGallary'
import Apicard from './Apicard'
import ApiCarousal from './ApiCarousal'

function Routings() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><NavCard/><NavCard2/></>}/>
     <Route path='/card' element={<><NavCard2/></>}/>
     <Route path='/ApiGallary' element={<><ApiGallary/></>}/>
     <Route path='/Apicard' element={<><Apicard/></>}/>
     <Route path='/ApiCarousal' element={<><ApiCarousal/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routings
