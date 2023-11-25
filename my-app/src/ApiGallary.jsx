import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ApiGallary() {
   const [first, setfirst] = useState([])

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/photos").then((display)=>{
        setfirst(display.data)
      })
    }, [])
    
  return (
    <div>
      {first.map((item)=>(
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={item.url} />
         <Card.Body>
           <Card.Title>{item.albumId}</Card.Title>
           <Card.Text>
           {item.title}
           </Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
      ))}
    </div>
  )
}

export default ApiGallary
