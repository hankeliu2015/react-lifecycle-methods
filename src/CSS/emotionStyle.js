import React from 'react';
import styled from '@emotion/styled';


const HeroDiv = styled.div`
  border: 1px solid red;
  padding-lef: 1em;
  margin-bottom: 5px;
  h4 {
    color: blue;
    text-decoration: underline;
  }
  p {
    color: ${props => props.super ? 'red' : 'maroon'};
  }
`;

export { HeroDiv };
