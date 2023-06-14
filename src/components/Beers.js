import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Header from "./Header";
import { NavLink } from "react-router-dom";

function BeersDisplay() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <>
    <Header />
      <h1>Beers List</h1>
      
      <div className="container">
        {beers.map((beer) => (
           
          <div key={beer._id} className="beer">
          <NavLink to={`/beers/${beer._id}`} activeClassName="active">
            <img src={beer.image_url} alt="beerimage" /></NavLink>
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <h6>Contributed by: {beer.contributed_by}</h6>
          </div>
        ))}
      </div>

    </>
  );
}

export default BeersDisplay;
