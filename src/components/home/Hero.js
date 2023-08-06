import React from 'react'
import house1 from '../images/house1.jpg'
import home2 from '../images/home2.jpg'
import house3 from '../images/house3.jpg'
import styled from 'styled-components';

const CarouselItem = styled.div`
  height: 80vh;
  min-height: 300px;
  img {
    width: 100%;
    height: 800px;
  }
  @media(max-width: 992px){
    height: 100%;
  }
`;
const CarouselCaption = styled.div`
  bottom: 180px !important;
  z-index: 2;
  @media(max-width: 1024px){
    bottom: 80px !important;
  }
  @media(max-width: 992px){
    bottom: 250px !important;
  }
`;

const CarouselCaptionTitle = styled.h5`
  font-size: 45px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 25px;
`;

const CarouselCaptionText = styled.p`
  width: 60%;
  margin: auto;
  font-size: 18px;
  line-height: 1.9;
`;

const CarouselInner = styled.div`
  position: relative;
  &::before {
    content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3); 
  z-index: 1;
  }
`;
const Btn = styled.a`
   color: #fff;
   background-color: #68a0d2;
   padding: 10px 20px;
   border-radius: 5px;
   display: inline-block;
   &:hover {
    background-color: #96b9d8;
   }
`;

export const Hero = () => {
  return (
    <div>
       <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
        <div className="carousel-indicators">
            <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
        </div>
        <CarouselInner className="carousel-inner">
            <CarouselItem className="carousel-item active">
                <img alt="..." className="d-block w-100 img-fluid" src={house1} />
                <CarouselCaption className="carousel-caption">
                    <CarouselCaptionTitle >Your Dream House</CarouselCaptionTitle>
                    <CarouselCaptionText >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</CarouselCaptionText>
                    <p><Btn className="btn mt-3" style={{textDecoration: 'none'}} href="/" >Learn More</Btn></p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem className="carousel-item">
                <img alt="..." className="d-block w-100 img-fluid" src={home2} />
                <CarouselCaption className="carousel-caption">
                    <CarouselCaptionTitle>Always Dedicated</CarouselCaptionTitle>
                    <CarouselCaptionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</CarouselCaptionText>
                    <p><Btn className="btn  mt-3" style={{textDecoration: 'none'}} href="/" >Learn More</Btn></p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem className="carousel-item">
                <img alt="..." className="d-block w-100 img-fluid" src={house3} />
                <CarouselCaption className="carousel-caption">
                    <CarouselCaptionTitle>True Construction</CarouselCaptionTitle>
                    <CarouselCaptionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</CarouselCaptionText>
                    <p><Btn className="btn mt-3" style={{textDecoration: 'none'}} href="/">Learn More</Btn></p>
                </CarouselCaption>
            </CarouselItem>
        </CarouselInner>
        <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button">
            <span aria-hidden="true" className="carousel-control-prev-icon"></span> 
            <span className="visually-hidden">Previous</span>
        </button> 
        <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button">
            <span aria-hidden="true" className="carousel-control-next-icon"></span> 
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}