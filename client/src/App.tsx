import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import AppRouter from './app/router';


function App() {
  return (
    <div className="App">
<AppRouter />

    </div>
  );
}

export default App;
