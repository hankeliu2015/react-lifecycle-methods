import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map(todo =>
        <TodoItem todo = {todo} key = {todo.id} />
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
