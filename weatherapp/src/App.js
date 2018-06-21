import React, { Component } from 'react';
import WeatherLocation from './components/WheatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation/>
      </div>
    );
  }
}

export default App;
