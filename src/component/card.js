import React from 'react'
import { Link } from 'react-router-dom'
import Products from './component/Products';

export default function Card() {
  return (
    <div>
        <Link to ={`Products/${Products.id}`} style={{textDecoration: 'none'}}>
          <div className="card text-center single-card" id="1">
              <img className='card-img card-img-top p-2 img-fluid w-100 img' src="https://rukminim1.flixcart.com/image/312/312/ktvucnk0/headphone/2/q/l/air-buds-mini-truly-wireless-noise-original-imag74hsdrewcbkc.jpeg?q=70" alt="Noise Air Buds"  style={{cursor: "pointer"}}/>
          </div>
          <div className="card-body">
              <h6 className='card-title' style={{cursor: "pointer"}}>Noise Air Buds</h6>
              <a href="#" className='card-link green' style={{color: "black"}}>From $499</a>
              <p className='card-subtitle text-muted'> Logitech, Quantum</p>
          </div>
        </Link>
    </div>
  )
}
