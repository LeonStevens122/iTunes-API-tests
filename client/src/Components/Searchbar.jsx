// JavaScript source code
// import dependancies and libraries

import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function Searchbar({ criteria, getResults, search }) {
  return (
    <div>
      <div>
        <Form>
          <Form.Label>Search Term</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter search term"
            defaultValue=""
            onChange={search}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form>
        <br />

        <Form onChange={criteria}>
          <Form.Group onChange={criteria} controlId="formGroupRadio">
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="movie"
              label="Movie"
              type="radio"
              id="movie"
            />
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="podcast"
              label="Podcast"
              type="radio"
              id="podcast"
            />
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="musicVideo"
              label="Music Video"
              type="radio"
              id="musicVideo"
            />
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="audiobook"
              label="Audio Book"
              type="radio"
              id="audiobook"
            />
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="shortFilm"
              label="Short Film"
              type="radio"
              id="shortFilm"
            />
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="tvShow"
              label="TV Show"
              type="radio"
              id="tvShow"
            />
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="software"
              label="Software"
              type="radio"
              id="software"
            />
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="ebook"
              label="E-Book"
              type="radio"
              id="ebook"
            />
            <Form.Check
              name="radioButtonSet"
              custom
              inline
              value="all"
              label="All"
              type="radio"
              id="all"
            />
          </Form.Group>
        </Form>
        <Button onClick={getResults} variant="primary">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Searchbar;
