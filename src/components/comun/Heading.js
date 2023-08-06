import React from 'react'
import styled from 'styled-components'

const Headi = styled.section`
    margin-bottom: 40px;
    padding-top: 60px;
`;
const Head = styled.div`
      font-size: 30px;
      color: #68a0d2;
      font-weight: 600;
      text-align: center;
      margin-bottom: 15px;
      margin-top: 10px;
`;
const Parr = styled.span`
  text-align: center;
`;

export const Heading = ({ title, par }) => {
  return (
    <Headi className='Heading'>
    <div className='container'>
       <div className='row'>
        <div className='enc text-center'>
           <Head className='heading ' data-aos = 'zoom-in-down' >{title}</Head>
           <Parr className='par pb-3'>{par}</Parr>
        </div>
       </div>
    </div>
    </Headi>
  )
}