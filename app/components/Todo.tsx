"use client";

import { use, useEffect, useState } from "react";

type Todo = {
  id: number;
  text: string;
};

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
    };

    setTodos([...todos, newTodo]); // add new todo to existing list of todos
    setInput("");
  }

  // hook to load existing todos to new ones into it
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // useEffect() keep storing added todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task..."
          className="flex-1 p-2 rounded bg-zinc-800 outline-none"
        />

        <button className="px-4 py-2 bg-blue-600 rounded" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between bg-zinc-800 p-2 rounded"
          >
            <span>{todo.text}</span>

            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              className="text-red-400"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
