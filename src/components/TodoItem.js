import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  render() {
    return (
      <div>

        <h2>{this.props.todo.id}: {this.props.todo.title}</h2>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
