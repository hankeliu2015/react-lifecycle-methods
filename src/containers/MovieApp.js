
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/MovieNavbar';
import Home from '../components/MovieHome';
import Actors from '../components/MovieActors';
import Directors from '../components/MovieDirectors';
import Movies from '../components/Movies';


const MovieApp = (props) => {
  return (
    <Router>
      <div className="app">
        <h2>Movie Directors and Actors client routing basics</h2>
        <NavBar />
        <Route exact path="/moviehome" component={Home} />
        <Route exact path="/movieactors" component={Actors} />
        <Route exact path="/moviedirectors" component={Directors} />
        <Route exact path="/movies" component={Movies} />
        <hr/>
      </div>
    </Router>
  );
};

export default MovieApp;
