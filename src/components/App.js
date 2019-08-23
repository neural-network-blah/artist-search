import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../containers/Search';
import ArtistView from '../containers/ArtistView';
import ReleaseView from '../containers/ReleaseView';
import LyricsView from '../containers/LyricsView';

export default function App() {
  return(
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/artist">Artist</Link>
        </li>
        <li>
          <Link to="/release">Release</Link>
        </li>
        <li>
          <Link to="/lyrics">Lyrics</Link>
        </li>
      </ul>

      <Route exact path="/:page?" component={Search} />
      <Route path="/artist/:id/:page" component={ArtistView} />
      <Route path="/release/:id" component={ReleaseView} />
      <Route path="/lyrics" component={LyricsView} />
    </Router>
  );
}
