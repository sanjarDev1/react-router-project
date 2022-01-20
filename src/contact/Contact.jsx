import React from 'react';
import { Btn, Title, Wrapper } from '../style';
import bac from '../images/2.png'
export const Contact = () => {
  return <Wrapper img={bac}>
    <Title>
      Contact page
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
