import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter is currently&nbsp;<span data-test='count'>{count}</span>
      </h1>
      <p className={errorMessage ? 'error' : 'hidden'} data-test='error-message'>
        The counter can't go below zero!
      </p>
      <button data-test='increment-button' onClick={() => setCount(count + 1)}>
        Increment counter
      </button>
      <button
        data-test='decrement-button'
        onClick={() => (count > 0 ? setCount(count - 1) : setErrorMessage(true))}
      >
        Decrement counter
      </button>
    </div>
  );
}

export default App;
