import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from '../components/Todos.js';
import TodoHeader from '../components/TodoHeader.js';
import TodoAdd from '../components/TodoAdd.js';
import About from '../components/TodoAbout.js';
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
      <Router>
        <div>
          <div exact className='todo-container'>
            <TodoHeader />
            <Route path="/todohome" render={props => (
                <React.Fragment>
                  <TodoAdd addTodo={this.addTodo} />
                  <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} />
            <Route path='/todoabout' component={About} />

          </div>
        </div>
      </Router>
    )
  }
}

export default TodoApp;
