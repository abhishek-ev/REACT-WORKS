import React from 'react'
import './LandingPage.css'
import vedio2 from './vedio4.mp4'

function LandingPage() {
  return (
    <div className='main1'>
      <div className='main1'>
      <div className="LandingPageNav">
        <div className="logos">
            <h1>Seawood</h1>
        </div>
        <div className="navitems">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Items</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
        </div>
      </div>
      <div className="contsiner1">
      <div className='vedionew'>
         <video autoPlay loop muted>
          <source src={vedio2}/>
         </video>
         <div className='mainh1'>
          <h1>Welcome</h1>
         </div>
         </div>
      </div>
      </div>

    </div>
  )
}

export default LandingPage
