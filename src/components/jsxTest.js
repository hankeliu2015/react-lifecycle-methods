import React, { Component } from 'react';

class JsxTest extends Component {
  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }
    const user = {
      firstName: "Harpter",
      lastName: "Perez"
    }
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;

    return(
      <div>
        {element}
        <h1>User enbed function to call name: {formatName(user)}</h1>
      </div>
    )
  }

}
//
export default JsxTest;
