import React, { Component } from 'react';

class ReactElementTest extends Component {
  render() {
     const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

    return (
      <div>
          {element}
      </div>
    )
  }
}

export default ReactElementTest;
