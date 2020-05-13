import React from 'react';
import './App.css';
import DynamicMoviesList from './components/DynamicMoviesList';

function App() {
  return (
    <div className="App">
    <h1>Movie Card</h1>
      <DynamicMoviesList/>
    </div>
  );
}

export default App;
