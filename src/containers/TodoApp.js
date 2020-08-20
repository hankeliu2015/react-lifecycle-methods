import React, { Component } from 'react';
import Todos from '../components/Todos.js'
import TodoHeader from '../components/TodoHeader.js'
import TodoAdd from '../components/TodoAdd.js'

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
      completed: false}
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(el => {
        if(el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      })
    })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    // console.log(this.state.todos)

    return (
      <div>
        <div className='todo-container'>
          <TodoHeader />
          <TodoAdd />
          <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    )
  }
}

export default TodoApp;
