import React, { Component } from 'react';
import { InputWithButton, Header, ProgressBar, Input, CategoryList } from './components';

import 'font-awesome/css/font-awesome.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ProgressBar percentage={80}/><br/>
        <InputWithButton btnText={'Add'} placeholder='Enter category title'/>
        <CategoryList/>
        <Input/>
      </div>
    );
  }
}

export default App;
