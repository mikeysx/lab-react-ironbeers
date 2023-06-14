import { BrowserRouter as Router, Route, Routes, NavLink, Outlet } from "react-router-dom";
import "../App.css";
import beersPic from "../assets/beers.png";
import randomBeerPic from "../assets/random-beer.png";
import newBeerPic from "../assets/new-beer.png";

function Home() {
  return (
    <>
      <ul><br />
        <li className="beer2">
          <NavLink to="/beers" activeClassName="active">
            <img src={beersPic} height="200px" alt="beers" /> <br />
          </NavLink>
          <h1>All Beers</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.{" "}
          </p>
        </li><br /><br />
        <li className="beer2">
          <br />
          <NavLink to="/randombeer" activeClassName="active">
            <img src={randomBeerPic} height="200px" alt="randombeer" /> <br />
          </NavLink>
          <h1>Random Beer</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.{" "}
          </p>
        </li><br /><br />
        <li className="beer2">
          <NavLink to="/newbeer" activeClassName="active">
            <img src={newBeerPic} height="200px" alt="beers" />
            <br />
          </NavLink> 
          <h1>New Beer</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.{" "}
          </p>
        </li><br />
      </ul>
    </>
  );
}

export default Home;
