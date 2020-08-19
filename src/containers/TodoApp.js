import React, { Component } from 'react';
import Todos from '../components/Todos.js'

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean up living room',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with friends',
        completed: false
      },
      {id: 3,
      title: 'Meeting with colleagues',
      completed: true}
    ]
  }
  render() {
    // console.log(this.state.todos)

    return (
      <div>
      <h1>Todos App</h1>
      <Todos todos = {this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;