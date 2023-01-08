import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    
    <nav className="navbar navbar-dark bg-primary">
      
      <div className="container">
        <a className="navbar-brand">
          <Link to={"/"}>
          <img
            src="https://skillsstack.in/static/media/logo-white-transparent.dc33bc258752dc4200eb.png"


            style={{
              height: "40px",
              color: "inherit"
            }}
          />
          </Link>
        </a>

        <div className="col col-md-4 search d-flex dropdown bg-white">
          <input className="form-control dropdown-toggle search" type="search" placeholder="Search for products, brands and more" aria-label="Search" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
          <i class="fa fa-search mt-2 ml-sm-1 text-primary search-icon"></i>
        
  <div class="dropdown-menu col-12 search-item" aria-labelledby="navbarDropdown">
    <h6 className="ml-4">Discover More</h6>
    <div className="dropdown-divider"></div>
    <a class="dropdown-item" href="#"><i className="fa fa-search text-secondary mr-3"></i>Mobiles</a>
    <a class="dropdown-item" href="#"><i className="fa fa-search text-secondary mr-3"></i>TV</a>
    <a class="dropdown-item" href="#"><i className="fa fa-search text-secondary mr-3"></i>laptop</a>
  </div>
</div>

<button className="btn btn-primary login bg-primary text-light" >
  Login
</button>


<div className="dropdown ">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#"><i class="fa-solid fa-bell text-primary"></i>Notification Preference</a></li>
          <li><a className="dropdown-item" href="#"> <i class="fa-solid fa-question text-primary"></i> 24*7 Custuom Care</a></li>
          <li><a className="dropdown-item" href="#"><i class="fa-sharp fa-solid fa-thumbs-up text-primary"></i>Advertise</a></li>
          <li><a className="dropdown-item" href="#"><i class="fa-solid fa-download text-primary"></i>Download the app</a></li>
        </ul>
      </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"/Product"}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
