import React, { Component } from 'react';

import styled from '@emotion/styled';

import '../App.css'

const HeroDiv = styled.div`
  border: 1px solid red;
  padding-lef: 1em;
  margin-bottom: 5px;
  h4 {
    color: blue;
    text-decoration: underline;
  }
  p {
    color: #fcc300;
  }
`;

class StylingTest2 extends Component {

  render() {

    return (
      <div >
        <div>

          <h4>The Flash - Emotion Styled</h4>
          <p>The Flash is a fictional superhero in comic books.</p>

        </div >
        <div>
          <h4>Reverse Flash - - Emotion Styled</h4>
          <p>Reverse Flash is a supervillain in comic books.
        </p>
      </div>

      </div>
    )
  }

}

export default StylingTest2;
