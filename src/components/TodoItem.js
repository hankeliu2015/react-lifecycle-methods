import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.todo.id}: {this.props.todo.title}</h2>
      </div>
    )
  }
}

export default TodoItem;
