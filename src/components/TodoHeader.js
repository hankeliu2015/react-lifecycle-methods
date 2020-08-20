import React from 'react';

function TodoHeader() {
  return (
    <h1 style={todoHeaderStyle}>Todo List </h1>
  )
}

const todoHeaderStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default TodoHeader;
