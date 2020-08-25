import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="https://res.cloudinary.com/dcyxkrt7p/image/upload/v1598298388/CatIcon.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: '10%', height: '10%' }} />
    );
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '50vh', border: 'solid 2px #030303', margin: '25px 25px'}} onMouseMove={this.handleMouseMove}>

        {/*
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
        <Cat mouse={this.state} />
      </div>
    );
  }
}

class MouseTracker1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Move the mouse around!</h2>
        <MouseWithCat />
      </div>
    );
  }
}

export default MouseTracker1;
