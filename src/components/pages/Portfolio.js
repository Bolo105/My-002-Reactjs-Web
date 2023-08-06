import React, { useState } from 'react'
import { Heading } from '../comun/Heading'
import { FaPlus } from 'react-icons/fa'
import { portfolio } from '../data/Data'
import styled from 'styled-components';

const Article = styled.article`
  margin-top: 50px;
  margin-bottom: 80px;

  button {
    border: none;
    outline: none;
    background: none;
    font-size: 17px;
    background-color: #96b9d8;
    color: #000;
    padding: 10px 30px;
    border-radius: 50px !important;
    margin-top: 20px;
    cursor: pointer;

    &.primaryBtn {
      background: none;
      border: 2px solid #96b9d8;
    }
  }

  img {
    width: 410px !important;
    height: 350px !important;
  }

  .box {
    position: relative;
    transition: 0.5s;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      transition: 0.5s;
      z-index: 2;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #96b9d8;
        opacity: 0;
        transition: 0.5s;
        z-index: -1;
      }
    }

    &:hover .overlay::after,
    &:hover .overlay {
      opacity: 1;
    }
  }

  .catButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    @media(max-width: 912px){
      font-size: 14px;
      margin: 20px 2px;
    }
    @media(max-width: 569px){
      font-size: 8px;
      margin: 10px 2px;
    }

    button {
      text-transform: capitalize;
      margin-right: 20px;
      @media(max-width: 912px){
      font-size: 12px;
      margin: 20px 2px;
    }
    @media(max-width: 569px){
      font-size: 12px;
      margin: 10px 2px;
      padding: 8px 16px;
    }
    }
    
  }

  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    @media(max-width: 912px){
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))];
export const Portfolio = () => {
    const[list, setList] = useState(portfolio)
    const[category, setCategory] = useState(allCategory);
    console.log(setCategory);

    const filterItems = (category) => {
      const newItems = portfolio.filter((item) => item.category === category )
      setList(newItems)
      if(category === 'all'){
        setList(portfolio)
        return
      }
    }

  return (
   <>
    <Article id='portfolio'>
      <div className='container'>
       <Heading title='Portfolio' par="Here is a sentence that talks about the section..." />
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className=' box' data-aos='fade-up'>
                <div className='img'>
                  <img className='img-fluid' src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <FaPlus />
                </div>
              </div>
            ))}
          </div>
      </div>
    </Article>
    </>
  )
}
