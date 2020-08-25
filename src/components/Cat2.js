import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src= "https://res.cloudinary.com/dcyxkrt7p/image/upload/v1598298388/CatIcon.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y , width: '10%', height: '10%'}} />
    );
  }
}

class Mouse extends React.Component {
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
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Move the mouse around 2!</h2>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

export default MouseTracker2;
