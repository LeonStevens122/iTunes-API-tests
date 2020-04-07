// import components and dependencies

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./Components/Searchbar";
import SearchResults from "./Components/searchresults";
import "./App.css";
import FavouriteList from "./Components/favourites";
import Axios from "axios";
// set initial value of favourites array
let arrFavourites = [];
// contstruct react app using hooks to handle state
const App = () => {
  const [searchterm, setSearchterm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchCriteria, setsearchCriteria] = useState();
  const [update, setUpdate] = useState();

  // listen to input
  const searchTermChange = (e) => {
    setSearchterm(e.target.value);
    console.log(searchterm);
  };

    // function removes a specified item from the favourites array and updates the state to be rendered
  const removeItem = (event) => {
    let arrFavourites = JSON.parse(sessionStorage.getItem("favourites"));
    // setupdate function is used to force the component to render
      // setUpdate state is set to a random number to ensure the FavouritesList component renders 
      setUpdate(Math.random());
    // set the value of the item to be removed to a local variable
    let removeIndex = Number(event.target.value);
      // use array.filter to filter out the item to be removed from the favourites array
    arrFavourites = arrFavourites.filter((item, index) => {
      return item.trackId !== removeIndex;
    });

    // set the state of the favourites state to match the new array after the filter
    setFavourites(arrFavourites);
      // save the array to localstorage
    localStorage.setItem("favourites", JSON.stringify(arrFavourites));
  };
    // get the user input from the radio buttons
  const getsearchCriteria = (event) => {
    setsearchCriteria(event.target.value);
    
  };

    // event handling for the search button
    
  const getResults = async () => {
    
      // use axios to send an async get request to the server which handles the API call 
      // use Axios params to specify the search criteria
      // await the results and set the value of the response to the results recieved from the server
    await Axios.get("/search/", {
      params: { term: searchterm, entity: searchCriteria },
    }).then(async function (response) {
      await setSearchResults(response.data);
    });
  };
    // event handling for adding items to the favouritesList
    const addFavourite = (event) => {
      // set state of the update value to force the favourites list to be re-renndered
        setUpdate(Math.random());
        // set the index value of the item to be added to the favourites list to a local variable and force number 
    let index = Number(event.target.value);
   // push favourite item to the favourites list from the serch result list
    arrFavourites.push(searchResults[index]);
        // update session storage if needed and update the state
    if (sessionStorage.getItem("favourites") === null) {
      sessionStorage.setItem("favourites", JSON.stringify(arrFavourites));
    } else {
      sessionStorage.setItem("favourites", JSON.stringify(arrFavourites));

      setFavourites(arrFavourites);

      
    }
  };
    // set initial state of the search criteria 
  useEffect(() => {
    setsearchCriteria("all");
  }, []);
    // render the components using state as props
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
              <FavouriteList
          remove={removeItem}
          favourites={favourites}
          update={update}
        />
      </footer>
    </div>
  );
};

export default App;
