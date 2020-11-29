import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter is currently&nbsp;<span data-test='count'>{count}</span>
      </h1>
      <button data-test='increment-button' onClick={() => setCount(count + 1)}>
        Increment counter
      </button>
      <button data-test='decrement-button' onClick={() => count > 0 && setCount(count - 1)}>
        Decrement counter
      </button>
    </div>
  );
}

export default App;
