import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <Todo
              todo={todo}
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              text={todo.text}
            />
          ))
        ) : (
          <p>No task available</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
