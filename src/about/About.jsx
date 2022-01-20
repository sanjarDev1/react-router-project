import React from 'react';
import { Btn, Title, Wrapper } from '../style';
import bac from '../images/3.png'
export const About = () => {
  return <Wrapper img={bac}>
    <Title>
      About page
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
