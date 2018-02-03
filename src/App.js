import React, { Component } from 'react';
import Header from './components/Header'
import HomeSlider from './components/HomeSlider'
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-container">
          <HomeSlider />
        </div>
      </div>
    );
  }
}

export default App;
