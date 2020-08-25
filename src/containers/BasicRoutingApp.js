import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function BasicRoutingApp () {
  return (
    <Router>
    <h2>Basic Client Routing Testing App</h2>
      <ul>
        <li>
          <Link to="/basicroutinghome">Home</Link>
        </li>
        <li>
        <Link to="/basicroutingabout">About</Link>
        </li>
        <li>
        <Link to="/basicroutingUsers">Users</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/basicroutinghome">
          <Home />
        </Route>
        <Route path="/basicroutingabout">
          <About />
        </Route>
        <Route path="/basicroutingUsers">
          <Users />
        </Route>
      </Switch>
    </Router>
  )

}

function Home() {
  return <h2>Home page </h2>
}
function About() {
  return <h2>About page </h2>
}
function Users() {
  return <h2>Users page </h2>
}
