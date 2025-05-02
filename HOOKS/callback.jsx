
/*Key Points About Callbacks:
Function Argument: A callback is just a function that is passed as an argument to another function.
Executed Later: The function receiving the callback decides when to execute it.
Flexible: Useful for tasks that involve waiting for data, such as API calls, file reading*/


import { memo, useState, useCallback } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // Use useCallback to memoize the function
  const a = useCallback(() => {
    console.log("radhe radhe");
    return "radhe radhe";
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
      <Demo a={a} />
    </div>
  );
}

const Demo = memo(function ({ a }) {
  console.log("rendering Demo");
  return <div>jay shree ram {a()}</div>;
});

export default App;

