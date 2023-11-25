import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function NavCard2() {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/310oNXBcY0L._AC_UF1000,1000_QL80_.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    <Link to='/ApiGallary'><Button variant="primary" href='/ApiGallary'>Go somewhere</Button> </Link> 
      </Card.Body>
    </Card>
    </div>
  )
}

export default NavCard2
