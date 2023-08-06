import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaQuestion } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs'
import { MdPrivacyTip, MdDeliveryDining } from 'react-icons/md'
import styled from 'styled-components';

const Foot = styled.footer`
  background-color: #96b9d8;
`;
const Copy = styled.div`
   background-color: rgba(0, 0, 0, 0.2);
`;
const Ul = styled.ul`
   margin-left: 1.65em;
   list-style: none;
`;
const Head5 = styled.h5`
   padding-left: 60px;
   @media (max-width: 768){
    padding-left: 0px;
   }
`;
const A = styled.a`
    margin-right: 8px !important;
    
`;
const Soc = styled.div`
   @media(max-width: 912px){
    margin-bottom: 20px;
   }
   
`;
const Keep = styled.div`
   @media(max-width: 569px){
     margin-left: -25px !important;
   }
`;


export const Footer = () => {
  return (
    <Foot className="text-white text-center text-lg-start ">
    <div className="container p-4">
      <div className="row mt-4">
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="mb-4">myBuildComp</h5>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>
          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>
          <Soc className="mt-4">
            <A href='/' type="button" className="btn btn-floating btn-primary btn-lg mr-3">
              <i className="">
                <FaFacebookF />
              </i>
            </A>
            <A href='/' type="button" className="btn btn-floating btn-primary btn-lg">
              <i className="fab fa-dribbble">
                <FaTwitter />
              </i>
            </A>
            <A href='/' type="button" className="btn btn-floating btn-primary btn-lg">
              <i className="fab fa-twitter">
                <FaInstagram />
              </i>
            </A>
            <A href='/' type="button" className="btn btn-floating btn-primary btn-lg">
              <i className="fab fa-google-plus-g">
                <FaLinkedin />
              </i>
            </A>
          </Soc>
        </div>
        <Keep className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <Head5 className="text-uppercase mb-4 pb-1">Keep in Touch</Head5>
          <Ul className="fa-ul">
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-home">
                  <FaQuestion/>
                </i>
              </span>
              <span className="ms-2">
                 Frequently Asked Question
              </span>
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-envelope">
                  <MdPrivacyTip />
                </i>
              </span>
              <span className="ms-2">
                Privacy Policy
              </span>
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-phone">
                  <MdDeliveryDining color='#fff'/>
                </i>
              </span><span className="ms-2">
                Delivery and Payment
              </span>
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-print">
                  <BsPhone />
                </i>
              </span>
              <span className="ms-2">
                + 01 234 567 89
              </span>
            </li>
          </Ul>
        </Keep>
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>
          <table className="table text-center text-white">
            <tbody className="font-weight-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Copy className="text-center p-3">
      © 2021 Copyright:
      <a className="text-white" href="/"> myBuildComp</a>
    </Copy>
  </Foot>
  )
}