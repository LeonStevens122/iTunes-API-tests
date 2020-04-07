import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// React Function uses hooks to display the results of the search function
function SearchResults({ results, addFavourite }) {
  // return empty string of there are no results
  // if the results prop is not empty
  // map through the list and render the objects returned from the search using Bootstrap Cards
  if (results[0] === []) {
    return (
      <div>
        <h1> </h1>
      </div>
    );
  } else
    return (
      <div>
        <Container fluid>
          <Row xs={2} md={4} lg={6}>
            {results.map((item, index) => {
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
                      value={index}
                      onClick={addFavourite}
                      variant="primary"
                    >
                      Add To Favourites
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
// export the component
export default SearchResults;
