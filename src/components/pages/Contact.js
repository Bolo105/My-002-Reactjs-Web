import React from 'react'
import { Heading } from '../comun/Heading'
import { contact } from '../data/Data'
import styled from 'styled-components';

 const Cont = styled.div`
  margin: 20px 0 0;
  background-color: #e8f7fe;
`;

 const ContactRight = styled.div`
  padding: 20px;
`;

 const ContactLeft = styled.div`
  padding: 20px;
  text-align: left;
`;

 const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

 const Input = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #000;
  outline: none;
  margin: 10px 0;
  border-radius: 5px;
  
  &:nth-child(1) {
    margin-right: 10px;
  }
`;

 const TextArea = styled.textarea`
  width: 100%;
  padding: 20px;
  border: 1px solid #000;
  outline: none;
  margin: 10px 0;
  border-radius: 5px;
`;

 const ContactIcon = styled.i`
  padding-top: 25px;
  color: #215787;
  font-size: 25px;
`;

 const ContactText = styled.p`
  margin-top: 45px;
`;
const Btn = styled.a`
   color: #fff;
   font-size: 14px;
   background-color: #68a0d2;
   padding-top: 8px;
   border-radius: 5px;
   border: 1px solid #000;
   display: inline-block;
   &:hover {
    background-color: #96b9d8;
    color: #fff;
    border: 1px solid #000;
   }
`;
export const Contact = () => {
  return (
    <div>
      <Cont className='contact py-5' id='contact'>
         <div className='container'>
            <Heading title="Contact" par="Here is a sentence that talks about the section..."/>
            <div className='row'>
             <div className='col-lg-8'>
              < ContactRight className='right'>
                 <form>
                    <InputGroup className='d-flex'>
                      <Input  type='text' placeholder='Name' data-aos='flip-left'/>
                      <Input type='email' placeholder='Email' data-aos='flip-right'/>
                    </InputGroup>
                    <Input type='email' placeholder='Subject' data-aos='flip-up'/>
                    <TextArea name='' id='' cols='30' rows='10' placeholder='Message...' data-aos='flip-down'></TextArea>
                    <Btn className='btn btn-lg' style={{width: '100%'}} data-aos='zoom-in-up'>Submit</Btn>
                 </form>
              </ ContactRight>

              </div>
              <div className='col-lg-4'>
              <ContactLeft className='left'>
                {contact.map((item) => (
                    <div className='box text-grey' data-aos='zoom-in'>
                        <ContactIcon>{item.icon}</ContactIcon>
                        <ContactText className='par1'>{item.text1}</ContactText>
                        <p className='par2'>{item.text2}</p>
                    </div>
                ))}
              </ContactLeft>
              </div>
            </div>
         </div>
      </Cont>
    </div>
  )
}