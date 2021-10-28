import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item bg-light m-2">
        <Link to="/">Movies</Link>
        </li>
        <li className="nav-item bg-light m-2">
          <Link to= "/favorites">Favorites</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
