import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import AppRouter from './app/router';
import ShowCars from './app/items/componnents/show-cars';


function App() {
  return (
    <div className="App">
<AppRouter />
<ShowCars></ShowCars>
    </div>
  );
}

export default App;
