import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <li key={movieID}>
    <Link to={`/moviesnest/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  );

  return (
    <div>
      <ul>
      {renderMovies}
      </ul>

    </div>
  );
};

export default MoviesList;