import React from 'react';
import { Link } from 'react-router-dom';

function TodoHeader() {
  return (
    <React.Fragment>
      <h1 style={todoHeaderStyle}>Todo List </h1>
      <Link to="/todohome"> Todo Home </Link> | <Link to="/todoabout">Todo About</Link>

    </React.Fragment>
  )
}

const todoHeaderStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default TodoHeader;
