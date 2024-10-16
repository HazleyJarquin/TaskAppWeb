import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ITodos } from "hjarquin-cross/interfaces";

type TodoState = {
  todos: ITodos[];
  addTodo: ({ title, isCompleted }: ITodos) => void;
  removeTodo: (index: number) => void;
  completeTodo: (index: number) => void;
};

export const useTodosStore = create(
  persist<TodoState>(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      completeTodo: (id) => {
        set((state) => {
          const newTodos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          );
          return { todos: newTodos };
        });
      },
    }),
    {
      name: "todos-store",
    }
  )
);
