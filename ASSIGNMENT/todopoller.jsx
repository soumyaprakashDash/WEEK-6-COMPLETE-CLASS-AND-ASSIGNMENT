
//    ******ASSIGNMENT-1*****
// create an  app  that polls the sum-server gets n current set of todos render on screen with backend  link 

import React, { useEffect, useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Function to fetch todos
  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data.slice(0, 10)); // Limit to 10 todos for demo
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Poll every 5 seconds
  useEffect(() => {
    fetchTodos(); // initial fetch
    const intervalId = setInterval(fetchTodos, 5000);
    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <div>
      <h2> Polling Todos from Server</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span> {todo.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
