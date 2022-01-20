import React from 'react';
import { Btn, Title, Wrapper } from '../style';
import bac from '../images/1.png'
export const Home = () => {
  return <Wrapper img={bac}>
    <Title>
      Home page
    </Title>
   <div>
   <Btn>
      Submit
    </Btn>
    <Btn>
      Button
    </Btn>
    </div>
  </Wrapper>
};
