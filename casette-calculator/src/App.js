import React, { Component } from 'react';
import InputForm from '../src/components/InputForm';
import './App.css';
import LengthPicker from './components/LengthPicker';

class App extends Component {
  render() {
    return (
      <div className="pageWrapper">
        <LengthPicker></LengthPicker>
        <InputForm></InputForm>
      </div>
    );
  }
}

export default App;
