import React from "react"
import Slider from "react-slick"
import { testimonials } from "../data/Data"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";

 const Testimonials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #e8f7fe;

  &::after {
    background-image: url("../images/testimonials-bg.png") !important;
  }

  .box {
    max-width: 60%;
  }

  i {
    background-color: #fff;
    font-size: 20px;
    padding: 15px;
    margin: 30px 0;
    display: inline-block;
    color: #96b9d8;
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    margin: auto;
    border-radius: 50%;
    border: 3px solid #96b9d8;
  }

  img {
    width: 100px;
    height: 100px;
    background-size: cover;
    border-radius: 50%;
    object-fit: cover;
  }

  label {
    color: #96b9d8;
    margin: 0px 0px;
    display: inline-block;
  }

  h3 {
    margin-top: 10px;
  }
`;


export const Test2 = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <>
        <Testimonials id='test2' className='testimonials hero py-5'>
          <div className='container'>
            <Slider {...settings}>
              {testimonials.map((val) => (
                <div className='box'>
                  <i data-aos='zoom-out-up'>
                    <FormatQuoteIcon />
                  </i>
                  <p data-aos='zoom-out-down'>{val.text}</p>
                  <div className='img' data-aos='zoom-out-right'>
                    <img src={val.image} alt='' />
                  </div>
                  <h3 data-aos='zoom-out-left'>{val.name}</h3>
                  <label data-aos='zoom-out'>{val.post}</label>
                </div>
              ))}
            </Slider>
          </div>
        </Testimonials>
      </>
    )
  }
