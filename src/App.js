import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cronometros</h1>
          <hr />        
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
