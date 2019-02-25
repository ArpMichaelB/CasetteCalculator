import React, { Component } from 'react';
import InputForm from './components/InputForm/InputForm';
import './App.css';
import LengthPicker from './components/LengthPicker/LengthPicker';

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
