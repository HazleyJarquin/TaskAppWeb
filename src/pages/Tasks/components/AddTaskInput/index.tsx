import { IconButton, Input } from "aurakitui";
import { ITodos } from "hjarquin-cross/interfaces";
interface Props {
  todos: ITodos[];
  todo: string;
  setTodo: (value: string) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
}

export const AddTaskInput = ({
  handleOnKeyDown,
  handleAddTodo,
  todo,
  todos,
  setTodo,
}: Props) => {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Input
        type="text"
        label="Add Todo"
        placeholder="Type your todo for today"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
      <IconButton
        icon="Plus"
        onClick={handleAddTodo}
        iconSize={24}
        style={{ marginTop: "1rem" }}
        disabled={todos.length >= 6}
        mode="secondary"
      />
    </div>
  );
};
