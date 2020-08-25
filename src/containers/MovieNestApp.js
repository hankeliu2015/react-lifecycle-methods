import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MovieNestNavBar from '../components/MovieNestNavBar';
import MoviesNestPage from './MoviesNestPage';

class MovieNestApp extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <MovieNestNavBar />
          <Route exact path="/movienesthome" render={() => <div><h1>Movie
            App Nest Routing Test Home Page</h1>  <p>Eam libris meliore ea, nam id aperiam insolens. In ius suas ferri ignota, impedit rationibus eum ne. Te sed volutpat constituam scribentur. Eu ius velit numquam detraxit, at brute elitr nam.</p><hr/></div>} />
          <Route path='/moviesnest' render={routerProps => <MoviesNestPage {...routerProps} movies={this.state.movies}/>} />
        </div>
      </Router>
    );
  }
}

export default MovieNestApp;
