import React from 'react';
import { actors } from './MovieData.js';

const MovieActors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
          <div key={index}>
              <h3>Name: {actor.name}</h3>
              <h4>Movies</h4>
              <ul>
                  {actor.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default MovieActors;
