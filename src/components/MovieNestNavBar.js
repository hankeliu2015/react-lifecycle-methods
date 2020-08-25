import React from 'react';
import { NavLink } from 'react-router-dom';

const MoveNestNavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/movienesthome"
      >
        Home
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/moviesnest"
      >
        Movies
      </NavLink>
    </div>
  );
}

export default MoveNestNavBar;
