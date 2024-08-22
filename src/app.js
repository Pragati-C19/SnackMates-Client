// Main React component
import { useState } from 'react';
import React from 'react';
import './app.css';

function App() {
  const [count, setCount] = useState(0);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h1', null, 'Byee')
  );
}

export default App;
