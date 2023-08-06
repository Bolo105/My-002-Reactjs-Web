import React from 'react'
import { Heading } from '../comun/Heading'
import { services } from '../data/Data';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
  .card {
  h3 {
    margin-top: 20px;
  }
}
`;
const Btn = styled.a`
   color: #fff;
   font-size: 14px;
   background-color: #68a0d2;
   padding: 6px 15px;
   border-radius: 5px;
   display: inline-block;
   &:hover {
    background-color: #96b9d8;
   }
`;
const Icon = styled.i`
    color: #96b9d8;
    font-size: 60px !important;
`;


export const Services = () => {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <Heading
          title="Services"
          par="Here is a sentence that talks about the section..."
        />
        <div className="row">
          {services.map((item) => (
            <div className="col-12 col-md-12 col-lg-4" data-aos='flip-left'>
              <ServicesWrapper className="card text-white text-center bg-dark pb-2 mb-4">
                <div className="card-body">
                  <Icon className="">{item.icon}</Icon>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Btn className="btn">
                    Read More
                  </Btn>
                </div>
              </ServicesWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
