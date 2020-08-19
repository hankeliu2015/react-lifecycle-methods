import React, { Component } from 'react';
import TodoItem from './TodoItem.js'

class Todos extends Component {

  render() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem todo = {todo} key = {todo.id} />
      )
    })
  }
}

export default Todos;
