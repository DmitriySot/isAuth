import React from "react"
import { NavLink } from "react-router-dom"


import "./style.css"

const Header = () => {

  return (

      <div className="main">
        <div>
          <NavLink exact to="/"
						activeClassName="active">MainPage</NavLink>
        </div>
        <div>
          <NavLink to="/login">Login</NavLink>
        </div>
        <div>
          <NavLink to="/news">News</NavLink>
        </div>
        <div>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>



  );
};

export default Header;


