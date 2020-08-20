import React, { Component } from 'react';

class TodoAdd extends Component {

  render() {
    return (
      <div>
        <form style={{display: 'flex'}}>
          <input
            type='text'
            name="title"
            style={{flex: '10', padding: '5px'}}
            placeholder="Add Todo ..."
          />
          <input
            type='submit'
            vakye="submit"
            style={{flex: '1'}}
          />
        </form>
      </div>
    );
  }

}

export default TodoAdd ;
