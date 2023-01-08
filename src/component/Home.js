import React from "react";
import CategoryCard from "./CategoryCard";
import Navbar from "./Navbar";
import "../style/Home.css"
import Corousel from "./Corousel";
import Card from "./card";
import Banner from "./banner";
import Jmbotron from "./jumbotron";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="container-fluid">
      
      <div className="row category-container">
        {
          new Array(10).fill(0).map((ele, index) =>{
            return <div className="col-md-1">
              <CategoryCard/>
            </div>
          })
        }
      </div>
      <Corousel/>

      <Banner/>
      <div className="row category-container">
        <div className="card">
          <h2 className="card-title mt-2">Best of Electronics
          <button className="btn btn-primary button">View All</button></h2>
        </div>
      <div className="col-md-3"></div>
        {
          new Array(6).fill(0).map((ele, index) =>{
            return <div className="col-md-1">
              <Card/>
            </div>
          })
        }
      </div>

      <div className="row category-container">
        <div className="card">
          <h2 className="card-title mt-2">Best of Electronics
          <button className="btn btn-primary button">View All</button></h2>
        </div>
      <div className="col-md-3"></div>
        {
          new Array(6).fill(0).map((ele, index) =>{
            return <div className="col-md-1">
              <Card/>
            </div>
          })
        }
      </div>

      <div className="row category-container">
        <div className="card">
          <h2 className="card-title mt-2">Best of Electronics
          <button className="btn btn-primary button">View All</button></h2>
        </div>
      <div className="col-md-3"></div>
        {
          new Array(6).fill(0).map((ele, index) =>{
            return <div className="col-md-1">
              <Card/>
            </div>
          })
        }
      </div>

      <div className="mt-4 mb-4">
        <Jmbotron/>
      </div>
      
      <div className="footer">
        <Footer/>
      </div>

      
    </div>
    
  );
}
