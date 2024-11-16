// Home.jsx
"use client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";

export default function Home() {
  // Use hooks at the top level of your component
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  // Fetch todos using useQuery
  const { data: todos, isLoading } = useQuery({
    queryFn: async () => {
      // Mock API call, replace with your actual API request
      const req = {
        data: [
          {
            id: 1,
            title: "One To Do",
          },
        ],
      };
      return req.data;
    },
    queryKey: ["todo"],
  });

  // Function to add a new todo
  async function addTodo(title) {
    // Simulate a network request, replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newTodo = { title };
    return newTodo;
  }

  // Use useMutation for data mutation
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: (newTodo) => {
      // On success, update the cached todos
      queryClient.setQueryData(["todo"], (oldTodos) => {
        return [...(oldTodos || []), newTodo];
      });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>React Query</h1>
      <div>
        {/* Render the list of todos */}
        {todos.map((t, i) => (
          <div key={i}>{t.title}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <button
          onClick={async () => {
            try {
              // Trigger the mutation when adding a new todo
              await addTodoMutation(title);
              setTitle(""); // Clear the input after adding
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
