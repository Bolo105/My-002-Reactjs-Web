import React from 'react'
import { about } from '../data/Data';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding-top: 160px;
`;

const AboutText = styled.div`
  text-align: left;
`;
const Btn = styled.a`
   color: #fff;
   background-color:  #68a0d2;
   padding: 10px 20px;
   border-radius: 5px;
   display: inline-block;
   &:hover {
    background-color: #96b9d8;
    color: #fff;
   }
`;

export const About = () => {

  return (
    <AboutSection className="about section-padding" id="about">
      <div className="container">
        <div className="row">
          {about.map((val) => (
            <>
              <div className="col-lg-4 col-md-12 col-12" data-aos='fade-down-right'>
                <div className="about-img">
                  <img src={val.cover} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 text-align-left" data-aos='fade-down-left'>
                <AboutText className="about-text pt-5">
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                  <Btn className="btn" href="/package.json">
                    Learn More
                  </Btn>
                </AboutText>
              </div>
            </>
          ))}
        </div>
      </div>
    </AboutSection>
  );
}
