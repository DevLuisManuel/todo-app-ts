import { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: "1",
    title: "Aprender Typescript",
    completed: true,
  },
  {
    id: "2",
    title: "Aprender React",
    completed: false,
  },
  {
    id: "3",
    title: "Sacar la basura",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  );
};
export default App;
