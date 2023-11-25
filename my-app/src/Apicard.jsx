import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Apicard() {
    const [first, setfirst] = useState([])
useEffect(() => {
  axios.get('https://dummyjson.com/products').then((display)=>{
    setfirst(display.data.products)
  })
}, [])
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',padding:'20px'}}>
      {first.map((display)=>
      <>
       <Card style={{ width: '18rem', margin:"10px"}}>
       <Card.Img variant="top" src={display.images[0]} alt="" />
      <Card.Body>
        <Card.Title>{display.brand}</Card.Title>
        <Card.Text>
        {display.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </> 
      )}



    </div>
  )
}

export default Apicard
