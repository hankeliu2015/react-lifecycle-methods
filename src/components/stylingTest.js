import React, { Component } from 'react';
/* @jsx jsx */
// import { css } from '@emotion/core';
import { css, jsx } from '@emotion/core';
class StylingTest extends Component {


  render() {

    return (
      <div >
        <div css={css`
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
          `}>

          <h4>The Flash</h4>
          <p>The Flash is a fictional superhero in comic books.</p>

        </div >
        <div css={css`
            border: 1px solid maroon;
            padding-lef: 1em;
            margin-bottom: 5px;
            h4 {
              color: red;
              text-decoration: underline;
            }
            p {
              color: #fcc300;
            }
          `}>
          <h4>Reverse Flash</h4>
          <p>Reverse Flash is a supervillain in comic books.
        </p>
      </div>

      </div>
    )
  }

}

export default StylingTest;
