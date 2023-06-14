import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Header from "./Header";

function SingleBeer() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response) => {
      console.log("response.data", response.data);
      setBeer(response.data);
    });
  }, [beerId]);

  if (!beer) {
    return null; // or display a loading spinner
  };

  return (
    <>
      <Header />
      <div className="container">
        <div key={beer._id} className="beer">
          <img src={beer.image_url} alt="beerimage" />
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <h4>{beer.first_brewed}</h4>
          <h4>{beer.attenuation_level}</h4>
          <h4>{beer.description}</h4>
          <h6>Contributed by: {beer.contributed_by}</h6>
        </div>
      </div>
    </>
  );
}

export default SingleBeer;
