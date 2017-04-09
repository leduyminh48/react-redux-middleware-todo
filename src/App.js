import React, { Component } from 'react';
import { Header, ProgressBar } from './components';
import { MainPage } from './containers';

import 'font-awesome/css/font-awesome.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ProgressBar percentage={80}/><br/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
