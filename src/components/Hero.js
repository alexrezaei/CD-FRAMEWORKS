import React from 'react';
import "./main.scss"
function Hero() {
  return (
      <div className="container hero">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/images/carousel-1.jpg" className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/images/carousel-2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/images/carousel-3.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
      </div>
  );
}

export default Hero;
