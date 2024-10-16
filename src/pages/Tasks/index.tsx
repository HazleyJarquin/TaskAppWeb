import { Modal, TaskList } from "aurakitui";
import { useTodosStore } from "../../store";
import { useState } from "react";
import { AddTaskInput } from "./components/AddTaskInput";
import { ModalErrorChildren } from "./components/ModalErrorChildren";

export const Tasks = () => {
  const [todo, setTodo] = useState("");
  const [showModalError, setShowModalError] = useState(false);
  const { todos, addTodo, completeTodo, removeTodo } = useTodosStore();

  const handleAddTodo = () => {
    if (todo.trim() === "") return;
    addTodo({
      id: Math.floor(Math.random() * 100),
      title: todo,
      isCompleted: false,
    });
    setTodo("");
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (todos.length >= 6) {
        setShowModalError(true);
      } else {
        handleAddTodo();
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {showModalError && (
        <Modal
          children={<ModalErrorChildren />}
          onClose={() => setShowModalError(false)}
          open={showModalError}
        />
      )}
      <AddTaskInput
        handleAddTodo={handleAddTodo}
        handleOnKeyDown={handleOnKeyDown}
        setTodo={setTodo}
        todo={todo}
        todos={todos}
      />
      <div style={{ width: "50%" }}>
        <TaskList
          tasks={todos}
          onCompletedClick={(id: number) => completeTodo(id)}
          onDeleteClick={(id: number) => removeTodo(id)}
        />
      </div>
    </div>
  );
};
