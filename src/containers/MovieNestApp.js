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
          <h2>Nest Routing Movies App</h2>
          <MovieNestNavBar />
          <Route exact path="/movienesthome" render={() => <div><h3>Movie
            App Home Page</h3>  <p>Eam libris meliore ea, nam id aperiam insolens. In ius suas ferri ignota, impedit rationibus eum ne. Te sed volutpat constituam scribentur.</p><hr/></div>} />
          <Route path='/moviesnest' render={routerProps => <MoviesNestPage {...routerProps} movies={this.state.movies}/>} />
        </div>
      </Router>
    );
  }
}

export default MovieNestApp;
