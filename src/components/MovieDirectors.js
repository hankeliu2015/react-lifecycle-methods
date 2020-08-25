import React from 'react';
import { directors } from './MovieData.js';

const MovieDirectors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
          <div key={index}>
              <h3>Name: {director.name}</h3>
              <h4>Movies</h4>
              <ul>
                  {director.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
}

export default MovieDirectors
