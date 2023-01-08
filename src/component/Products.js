import React from "react";
import { useState } from "react";
export default function Products() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className="container-fluid">
      {/* onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)}
      style={{ width: '166' }} */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse navbar navbar-expand-lgd-flex flex-wrap justify-content-evenly"
            id="navbarNavDarkDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mobiles
                </a>
                <ul className="dropdown-menu dropdown-menu-light bg-secondary "show={showDropdown} >
                  <li>
                    <a className="dropdown-item" href="#">
                      MI
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Realme
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Samsung
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      POCO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LAVA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Apple
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TV
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <a className="dropdown-item" href="#">
                      MI
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Realme
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Samsung
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      VO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Motorola
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Footwear
                </a>
                <ul className="dropdown-menu dropdown-menu-light bg-secondary">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sprorts Shoes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Casual Shoes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Formal Shoes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sandals & Floaters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Flip-Flop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Loafers
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Beauty & Grooming
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <a className="dropdown-item" href="#">
                      Make Up
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Skin Care
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hair Care
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bath & Spa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Deodorants & Perfumes
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Toys
                </a>
                <ul className="dropdown-menu dropdown-menu-light bg-secondary">
                  <li>
                    <a className="dropdown-item" href="#">
                      Soft Toys
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Puzzles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action Figures
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Toy Guns
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Party Supplies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Outdoor Toys
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sports
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <a className="dropdown-item" href="#">
                      Cricket
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Badminton
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cycling
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Football
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Skating
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Swimming
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Books
                </a>
                <ul className="dropdown-menu dropdown-menu-light bg-secondary">
                  <li>
                    <a className="dropdown-item" href="#">
                      Entrance Exams
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Academics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      E-learning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Indian Languages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Selp-Help
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Preorders
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Stationery
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <a className="dropdown-item" href="#">
                      Pens
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Diaries
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Card Holders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Desk Organizers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Calculators
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Key Chains
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industrial & Scientific tools
                </a>
                <ul className="dropdown-menu dropdown-menu-light bg-secondary">
                  <li>
                    <a className="dropdown-item" href="#">
                      Industrial Measurment Devices
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lab & Scientific Products
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Packaging & Shipping Products
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saftey Products
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Industrial Testing Devices
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="fluid-container">
        <div
          className="card"
          style={{ width: "18rem", float: "left", position: "relative" }}
        >
          <img
            src="https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/o/1/i/-original-imagg4yhgkxnqscj.jpeg?q=70"
            className="card-img-top"
            alt="Noise Air Buds"
          />
          {/* butoons */}
          <hr />
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-warning mt-5">
                <i class="fa-solid fa-cart-shopping"></i>ADD TO CART
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-danger mt-5">
                <i class="fa-solid fa-poo-storm"></i>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      
        <nav style={{ bsBreadcrumbDivider: '">"' }} aria-label="breadcrumb">
          <ol className="breadcrumb mt-3" style={{fontSize: "12px" ,fontWeight: "300px"}}>
            <li className="breadcrumb-item">
              <a href="#" style={{color: "#6c757d", textDecoration: "none"}}>Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Audio & Video
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Headset
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Earphones
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Wireless Earphones
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              True Wireless
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Noise True Wireless
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Noise Air Buds
            </li>
          </ol>
        </nav>
        <div className="m-3" style={{fontWeight: "900px", fontFamily: "Roboto,Arial,sans-serif"}}>Noise Air Buds Pro 2 with 25 Hours Playtime, 40dB ANC, Triple Mic with ENC, and IPX5 Bluetooth Headset  (Charcoal Black, True Wireless)
        
        </div>
        <div><a href="#" style={{color: "green", textDecoration: "none"}}>Special price
</a></div>
        <span style={{fontWeight: "bold", fontSize: "28px", fontFamily: "Roboto,Arial,sans-serif"}}>₹2,999</span>

        <div style={{fontWeight: "bold"}}>Available offers</div>
        <div>
<span style={{fontWeight: "bold"}}>Bank Offer</span>5% Cashback on Flipkart Axis Bank Card <a href="#" style={{textDecoration: "none"}}>T&C</a></div>
<div>

<span style={{fontWeight: "bold"}}>Special Price</span>Get extra 62% off (price inclusive of cashback/coupon) <a href="#" style={{textDecoration: "none"}}>T&C</a></div>

<span style={{fontWeight: "bold"}}>Partner Offer</span>Buy this product and get upto ₹500 off on Flipkart Furniture <a href="#" style={{textDecoration: "none"}}>Know More</a></div>

<span style={{fontWeight: "bold", fontSize: "14px"}}>Partner Offer</span>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹1000*<a style={{textDecoration: "none"}} href="#">Know More</a></div>
    </div>
  );
}
