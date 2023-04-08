import logo from './logo.svg';
import './App.css';

import React  from 'react';
import Menu from './components/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TictactoeGame from './components/tictactoe';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Menu} />
          <Route path='/game' Component={TictactoeGame} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
