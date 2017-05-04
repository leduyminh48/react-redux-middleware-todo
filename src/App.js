import React, { Component } from 'react';
import { MainPage } from './containers';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { ROUTES } from 'routes';

import 'font-awesome/css/font-awesome.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainPage/>
          <Route exact path="/" render={() => (
            <Redirect to={ROUTES.ALL_CATEGORIES}/>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
