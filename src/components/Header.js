import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header () {
return (
    <div className="App-header">
    <NavLink to="/" activeClassName="active"> <h1>🏠</h1> </NavLink>
    </div>
)
};

export default Header;
