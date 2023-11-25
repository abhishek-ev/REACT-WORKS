import React from 'react'
import './Models.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Models() {
  return (
    <div className='cardsbackground'>
  
  <div className='head'>
      <h1>Models</h1>
      </div>
      <div className='cards'>
      <Card className='card1' style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-718/small/57ad32c8-ca23-11ec-80ef-005056bbdc38/porsche-small.jpg"/>
      <Card.Body>
        <Card.Title>718</Card.Title>
        <Card.Text>
        from INR 14,772,000
        </Card.Text>
        <Button variant="warning">All Models</Button>
        <Button variant="outline-danger">Build Your Own</Button>
      </Card.Body>
    </Card>

    <Card className='card1'style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-911/small/3cf76e8c-6694-11e9-80c4-005056bbdc38/porsche-small.jpg" />
      <Card.Body>
        <Card.Title>911</Card.Title>
        <Card.Text>
        from INR 18,646,000
        </Card.Text>
        <Button variant="warning">All Models</Button>
        <Button variant="outline-danger">Build Your Own</Button>
      </Card.Body>
    </Card>

    <Card className='card1' style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-taycan/small/094d1c1c-bab0-11e9-80c4-005056bbdc38/porsche-small.jpg" />
      <Card.Body>
        <Card.Title>Taycan</Card.Title>
        <Card.Text>
        from INR 16,093,000 *
        </Card.Text>
        <Button className='warning' variant="warning">All Models</Button>
        <Button variant="outline-danger">Build Your Own</Button>
      </Card.Body>
    </Card>

    <Card className='card1' style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-panamera/small/31077aa2-d337-11ea-80cc-005056bbdc38/porsche-small.jpg"  />
      <Card.Body>
        <Card.Title>Panamera</Card.Title>
        <Card.Text>
        from INR 15,804,000
        </Card.Text>
        <Button variant="warning">All Models</Button>
        <Button variant="outline-danger">Build Your Own</Button>
      </Card.Body>
    </Card>

    <Card className='card1' style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-cayenne/small/2fbf4ab0-ded1-11ed-8101-005056bbdc38/porsche-small.jpg"  />
      <Card.Body>
        <Card.Title>Cayenne</Card.Title>
        <Card.Text>
        from INR 13,561,000
        </Card.Text>
        <Button variant="warning">All Models</Button>
        <Button variant="outline-danger">Build Your Own</Button>
      </Card.Body>
    </Card>

    <Card className='card1' style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-macan/small/47db3c6d-e3d7-11eb-80d9-005056bbdc38/porsche-small.jpg" />
      <Card.Body>
        <Card.Title>Macan</Card.Title>
        <Card.Text>
        from INR 8,806,000
        </Card.Text>
        <Button variant="warning">All Models</Button>
        <Button variant="outline-danger">Build Your Own</Button>
      </Card.Body>
    </Card>
    
      </div>

      
    </div>
  )
}

export default Models
