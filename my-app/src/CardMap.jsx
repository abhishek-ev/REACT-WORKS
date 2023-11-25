import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function CardMap() {
    const [first, setfirst] = useState([
        { name:'KTM',color:'yellow',image:"https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW90b3JiaWtlfGVufDB8fDB8fHww"},
        { name:'lab',color:'orange',image:"https://www.hindustantimes.com/ht-img/img/2023/07/10/550x309/labrador-retriever-gfd78b67cf_1280_1677927949246_1688982230758.jpg"},
        { name:'pug',color:'black',image:"https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg"},
        { name:'pitbull',color:'pink',image:"https://static01.nyt.com/images/2023/09/15/multimedia/15UK-DOGS-01-hftk/15UK-DOGS-01-hftk-superJumbo.jpg"}



    ])
  return (
    <div style={{display:'flex',flexWrap:'wrap',flexDirection:'colum'}}>
        {first.map((display)=>( 
          <div>  
      <Card style={{ width: '22rem' ,margin:'20px',}}>
      <Card.Img variant="top" src={display.image} />
      <Card.Body>
        <Card.Title>{display.name} </Card.Title>
        <Card.Text>
        {display.color} 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        </Card>

<Carousel>
<Carousel.Item>
  <img src={display.image} alt="" />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>

</div>
  ))}  
    </div>
  )
}

export default CardMap
