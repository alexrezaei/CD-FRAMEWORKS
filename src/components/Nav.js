import React from 'react';
import { navbar } from 'react-bootstrap'
import "./main.scss"

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">The Yay Company</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="#">Home</a>
          <a className="nav-link" href="#">News</a>
          <a className="nav-link" href="#">Contact</a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Go</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
  )
  
}

export default Nav;
