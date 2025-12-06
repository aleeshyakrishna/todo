import React from "react";
//importing components
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
          />
        ))}
        {/* {filteredTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))} */}
      </ul>
    </div>
  );
};

export default TodoList;