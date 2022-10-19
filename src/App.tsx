import React from 'react';
import './App.css';
import Screen from './components/Screen/Screen';

function App() {
  return (
    <div className="App">
      <h1>My Calculator</h1>
      <main>
        <Screen value="0" />
      </main>
    </div>
  );
}

export default App;
