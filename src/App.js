import React from 'react';
import { Header, Results, Filter } from './components';
import './styles/main.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Filter />
      <Results />
    </div>
  );
}

export default App;
