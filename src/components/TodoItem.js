import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : "none"
    }
  }

  render() {
    return (
      <div>
        <h2 style={this.getStyle()}>{this.props.todo.id}: {this.props.todo.title}</h2>
      </div>
    )
  }
}

const testStyle1 = {
  backgroundColor: '#f4f4f4'
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
