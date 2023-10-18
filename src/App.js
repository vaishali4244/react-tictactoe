import React from 'react';
import Game from './components/Game/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="heading">
      <h1>Tic Tac Toe</h1>
      </div>
      <Game/>
    </div>
  );
}

export default App;
