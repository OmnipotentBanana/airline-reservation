import NavBar from './components/NavBar';
import React, { Component } from 'react';
import FlightFilterHeader from './components/FlightFilterHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <FlightFilterHeader/>
      </div>
    );
  }
}

export default App;
