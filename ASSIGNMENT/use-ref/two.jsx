// RenderTracker.jsx
import React, { useRef, useState } from 'react';

function RenderTracker() {
  const renderCount = useRef(1);
  const [state, setState] = useState(0);

  renderCount.current++;

  return (
    <div>
      <h2>Render Count</h2>
      <p>This component has rendered {renderCount.current} times.</p>
      <button onClick={() => setState(state + 1)}>Re-render</button>
    </div>
  );
}

export default RenderTracker;
