import React, { useState, Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class FavouriteList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          localFavourites: JSON.parse(localStorage.getItem("favourites")) || [],
          removeIndex: null,
          update: 0
      }
      
      let favList = JSON.parse(sessionStorage.getItem("favourites"));
      
  }


    render() {

      
    if (this.props.favourites === []) {
      return <h1> No Favourites selected yet. </h1>;
    } else {
      return (
        <div>
          
          <Container fluid>
            <Row xs={2} md={4} lg={6}>
                      {this.props.favourites.map((item, index) => {
                return (
                  <Card
                    className="resultCard"
                    key={index}
                    style={{ width: "100px" }}
                  >
                    <Card.Img
                      className="cardImg"
                      variant="top"
                      src={item.artworkUrl100}
                    />
                    <Card.Body>
                      <Card.Title>{item.trackName}</Card.Title>
                      <Card.Text className="cardText">
                        {item.shortDescription}
                      </Card.Text>
                      <Button
                                value={item.trackId}
                                onClick={this.props.remove}
                        variant="primary"
                      >
                        Remove Item
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default FavouriteList;
