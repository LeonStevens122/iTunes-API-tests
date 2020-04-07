import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useForceUpdate from 'use-force-update';

function Favourites({ remove, favourites }) {
    console.log(' favs', favourites);
    const forceUpdate = useForceUpdate();
    const handleClick = () => {
        console.log('I will re-render now.');
        forceUpdate();
    };
    
    if (favourites === []) { return <h1> No Favourites selected yet.  </h1> }
    else return (
       

            <div>
                <Container fluid>
                    <Row xs={2} md={4} lg={6}>
                    {favourites.map((item, index) => {
                            return (

                                <Card className="resultCard" key={index} style={{ width: '100px' }}>
                                    <Card.Img className="cardImg" variant="top" src={item.artworkUrl100} />
                                    <Card.Body>
                                        <Card.Title>{item.trackName}</Card.Title>
                                        <Card.Text className="cardText">
                                            {item.shortDescription}
                                        </Card.Text>
                                        <Button value={index} onClick={remove, handleClick} variant="primary">Remove Item</Button>
                                    </Card.Body>


                                </Card>
                            )
                        })}

                    </Row>
                </Container>

            </div>
       

    )
}

export default Favourites;