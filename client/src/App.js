import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        {/* <SavedList list={this.state.savedList} /> */}
        <div>

          
          <Router>
            <Route path="/" render = {(props) => <SavedList list={this.state.savedList} {...props }/>} />
          </Router>

          <Router>
            <Route exact path="/movies" render = {() => <MovieList/>} />
          </Router>

          <Router>
            <Route exact path="/movies/:index" render = {(props) => <Movie {...props} />} />
          </Router>

          
        </div>

        
      </div>
    );
  }
}
