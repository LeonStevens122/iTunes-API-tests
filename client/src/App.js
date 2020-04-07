import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Searchbar from "./Components/Searchbar";
import SearchResults from "./Components/searchresults";
import "./App.css";
import Favourites from "./Components/favourites";
import Axios from "axios";

let arrFavourites = [];

const App = () => {
  const [searchterm, setSearchterm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchCriteria, setsearchCriteria] = useState();
  

  // listen to input
  const searchTermChange = (e) => {
    setSearchterm(e.target.value);
    console.log(searchterm);
  };


    const removeItem = (event) => {
        console.log('remove Clicked', event.target.value);
    }
  const getsearchCriteria = (event) => {
    setsearchCriteria(event.target.value);
    console.log(event.target.value);
  };

  const getResults = async () => {
    console.log("Get results Clicked");

    await Axios.get("/search/", {
      params: { term: searchterm, entity: searchCriteria },
    }).then(async function (response) {
      await setSearchResults(response.data);
    });
  };

  const addFavourite = (event) => {
    let index = Number(event.target.value);
    console.log("results index", searchResults[index]);
    arrFavourites.push(searchResults[index]);

    if (sessionStorage.getItem("favourites") === null) {
      sessionStorage.setItem("favourites", JSON.stringify(arrFavourites));
    } else {
      sessionStorage.setItem("favourites", JSON.stringify(arrFavourites));

      setFavourites(arrFavourites);

      console.log("Favourites list", favourites);
    }
  };

  useEffect(() => {
    setsearchCriteria("all");
  }, []);

  return (
    <div className="App">
      <h1> iTunes Search App </h1>

      <Searchbar
        initialValue={searchCriteria}
        criteria={getsearchCriteria}
        getResults={getResults}
        search={searchTermChange}
      />
      <SearchResults addFavourite={addFavourite} results={searchResults} />
          <footer className="favouritesFoot">
              <h1> Favourites </h1>
              <Favourites remove={removeItem} favourites={favourites} />
      </footer>
    </div>
  );
};

export default App;
