import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function ApiCarousal() {
    const [first, setfirst] = useState([])

    useEffect(() => {

        axios.get('https://dummyjson.com/products').then((display) => {
            setfirst(display.data.products)
        })

    }, [])

    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',padding:'20px'}}>
            {first.map((items) =>
                <>
                    <Card style={{ width: '18rem', margin: "10px"}}>

                        <Carousel >
                            {items.images.map((photos) => (
                                <Carousel.Item>
                                    <Card.Img variant="top" src={photos} alt="" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        
                        <Card.Body>
                            <Card.Title>{items.brand}</Card.Title>
                            <Card.Text>
                                {items.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </>
            )}
        </div>
    )
}

export default ApiCarousal
