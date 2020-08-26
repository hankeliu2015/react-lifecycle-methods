import React from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h2>React Children Prop Test</h2>
      <h2 className="Dialog-title">
        Welcome
      </h2>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
      <hr/>
    </FancyBorder>
  );
}

export default WelcomeDialog;
