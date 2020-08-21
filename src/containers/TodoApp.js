import React, { Component } from 'react';
import Todos from '../components/Todos.js';
import TodoHeader from '../components/TodoHeader.js';
import TodoAdd from '../components/TodoAdd.js';
import { v4 as uuidv4 } from 'uuid';

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Clean up living room',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Dinner with friends',
        completed: false
      },
      {id: uuidv4(),
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

  addTodo = (title) => {
    let newTodo = {id :uuidv4(), title, completed: false}
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <div className='todo-container'>
          <TodoHeader />
          <TodoAdd addTodo={this.addTodo} />
          <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}

export default TodoApp;
