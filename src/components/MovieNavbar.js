import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/moviehome">Home</NavLink> | {' '}
      <NavLink to="/movies">Movies</NavLink> | {' '}
      <NavLink to="/moviedirectors">Directors</NavLink> | {' '}
      <NavLink to="/movieactors">Actors</NavLink>
    </div>
  );
};

export default NavBar;
