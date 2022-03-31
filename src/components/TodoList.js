import React from "react";
import styles from "./InputField.module.css";
import SingleTodo from "./SingleTodo";

const TodoList = ({todos, setTodos}) => {
  return (
    <div className="container">
      <div className={styles.todos}>
          <span className={styles.todos_heading}>
            Active Tasks
          </span>
          {
            todos.map((todo)=>(
              <SingleTodo todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))
          }
      </div>
      <div className={styles.todos}>
        <span className={styles.todos_heading}>
            Completed Tasks
          </span>
          {
            todos.map((todo)=>(
              <SingleTodo todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))
          }
      </div>

    </div>
  )
};

export default TodoList;
