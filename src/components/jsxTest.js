import React, { Component } from 'react';

class JsxTest extends Component {
  render() {
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
    return(
      <div>
        {element}
      </div>
    )
  }

}
//
export default JsxTest;
