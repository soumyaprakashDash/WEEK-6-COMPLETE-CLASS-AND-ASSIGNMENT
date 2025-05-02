import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [dummy, setDummy] = useState(false); // for testing re-render

  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const calculate = (n) => {
      if (n <= 1) return 1;
      return n * calculate(n - 1);
    };
    return calculate(number);
  }, [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial of {number} is {factorial}</p>
      <button onClick={() => setDummy(!dummy)}>Trigger Re-render</button>
    </div>
  );
}

export default FactorialCalculator;
