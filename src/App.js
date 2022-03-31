import { useState } from "react";
// import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
// import {v4 as uuid} from "uuid";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    if (todo) {
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="head">Daily Tasks</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
};

export default App;
