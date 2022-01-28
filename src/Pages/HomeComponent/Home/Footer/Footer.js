import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div  style={{marginTop:'100px'}}>
          <section id="about">
    <div className="container-fluid">
    <div className="row p-4 text-light footter">
      
      <div className="col-12 col-md-12 col-lg-3 ms-4 mt-4">
        <h3>This Is travel Camparing</h3>
        <p><span>
      Based in Utah, USA, Wanderland is a blog by Markus Thompson. His posts
      explore outdoor experiences through photos and diaries with tips & tricks.</span></p>
     <div className="d-flex">
     <h1><i className="fab fa-google text-primary "></i></h1>
    <h1> <i className="fab fa-twitter text-warning mx-3"></i></h1>
    <h1><i className="fab fa-youtube text-danger"></i></h1>
     </div>
      </div>
      <div className="col-12 col-md-12 col-lg-3 mt-4 footer-text">
      <h3>Contact</h3>
      <ul>
       <li>Address: Via Venti Settembre , Ireland</li>
        <li>Phone: +3244575656</li>
        <li>App , Viber, Whatsapp</li>
        <li>Email: maria@gmail.com </li>
    
      </ul>
    </div>
    <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text">
      <h2>Catagories</h2>
      <ul>
        <li>Enviroment</li>
        <li> Life Style</li>
        <li>  Ruls</li>
        <li> Motivate</li>
      </ul>
    </div>
  
    <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text">
      <h2>NewsLetter</h2>
    <p><span>Sign up for our newsletter and get update about our letest Promotion</span></p>
    <input type="email" name="" id=""  placeholder="your email"/>
    </div>
   
    </div>
  </div>
  </section>
  <footer style={{backgroundColor:'rgb(214, 218, 218)'}} className="col-12 text-center text-dark py-3">
    <small >&copy;Copyright 2021 Travel Agency  proggress</small>
  </footer>

      </div>
  );

};

export default Footer;