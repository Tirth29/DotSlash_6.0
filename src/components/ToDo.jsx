import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, { id: todos.length + 1, text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (todo) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a task"
          className="px-3 py-2 border border-gray-300 rounded-lg w-full"
        />
        <button onClick={handleAddTodo} className="ml-2 bg-blue-500 hover:bg-blue-700 w-96 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </div>
      <ul className="list-disc list-inside">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between py-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            <span>{todo.text}</span>
            <div className="flex items-center">
              <button
                onClick={() => handleCompleteTodo(todo)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2"
              >
                {todo.completed ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => handleDeleteTodo(todo)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
