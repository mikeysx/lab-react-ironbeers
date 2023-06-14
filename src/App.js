import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";

function App() {
  return (
  <Routes>
   <Route path="/" element={<Home />} />
    <Route path="/beers" element={<Beers />} />
    <Route path="/newbeer" element={<NewBeer />} />
    <Route path="/randombeer" element={<RandomBeer />} />
    <Route path="/beers/:beerId" element={<SingleBeer />} />
  </Routes>
  )
};

export default App;
