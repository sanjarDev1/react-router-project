import React from 'react';
import {Container, Img, Wrap, Wrapper} from './navStyle.js'
import logo from '../images/logo1.svg'
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
const navigate = useNavigate();

  return (
  <Wrapper>
      <Img> <img src={logo} alt="" /></Img>
      <Container>
        <Wrap onClick={()=>navigate('/')}>HOME</Wrap>
        <Wrap onClick={()=>navigate('/contact')}>CONTACT</Wrap>
        <Wrap onClick={()=>navigate('/about')}>ABOUT</Wrap>
      </Container>
  </Wrapper>)
};
