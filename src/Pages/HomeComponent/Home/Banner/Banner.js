import React from 'react';
import './Banner.css';
import img1 from '../../../../images/bn1.jpg';
import img2 from '../../../../images/bn2.jpg';
import img3 from '../../../../images/bn3.jpg';
import img4 from '../../../../images/bn4.jpg';
import Navigation from '../../../Shared/Navigation/Navigation';
const Banner = () => {
    return (
        <div>
                      <Navigation></Navigation>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
      
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100 " height="550px" alt="..."/>
    
      <div class="carousel-caption d-none d-md-block mb-5">
        <h1 className='fw-bold'>South cebu tourist spots</h1>
        <p>South cebu tourist spots include epic waterfalls, panoramic viewpoints, swimming with whale sharks and much more! See more ideas about tourist spots, philippines, tourist. Its sheer beauty (the name mayon comes from. View popular tourist destinations and plan your trip to the</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={img4} class="d-block w-100 " height="550px" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className='fw-bold'>Theme Forrest</h1>
        <p>Philippines Tourist Spots With Names. Here's a list of the most beautiful places in luzon you should visit.Philippines Tourist Spots With Names. Here's a list of the most beautiful places in luzon you should visit.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={img1} class="d-block w-100 " height="550px" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className='fw-bold'>Phuket Thailand </h1>
        <p>Philippines Tourist Spots With Names. Here's a list of the most beautiful places in luzon you should visit.Philippines Tourist Spots With Names. Here's a list of the most beautiful places in luzon you should visit.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={img3} class="d-block w-100 " height="550px" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className='fw-bold'>Phillipince Tourist Spot</h1>
        <p>Philippines Tourist Spots With Names. Here's a list of the most beautiful places in luzon you should visit.Philippines Tourist Spots With Names. Here's a list of the most beautiful places in luzon you should visit.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;