// Combined Counter Component (Parent + Child in one file)
import React, { useState, useCallback, memo } from 'react';

// Child Component
const CounterControls = memo(({ onIncrement, onDecrement }) => {
  console.log("Child rendered");
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
});

// Parent Component
function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h2> Counter: {count}</h2>
      <CounterControls onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}

export default CounterApp;
