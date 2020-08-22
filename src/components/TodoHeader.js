import React from 'react';
import { Link } from 'react-router-dom';

function TodoHeader() {
  return (
    <header style={todoHeaderStyle}>
      <h1 >Todo List </h1>
      <Link style={todoLinkStyle} to="/todohome"> Todo Home </Link> | <Link style={todoLinkStyle} to="/todoabout">Todo About</Link>
    </header>
  )
}

const todoHeaderStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const todoLinkStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default TodoHeader;
