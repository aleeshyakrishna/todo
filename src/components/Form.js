import React,{useState, useEffect} from "react";
import toast, { Toaster } from "react-hot-toast";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  //here i can write js functions and codes

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (inputText.length == 0) {
      toast.error("Please enter a valid input");
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };

  const deleteAll = () => {
    toast.success("All task deleted!");
    setTodos([]);
  };

    const statusHandler = (e) => {
      setStatus(e.target.value);
    };
  return (
    <>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder="Enter a task..."
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        {todos.length > 0 && (
          <>
            <div>
              <button onClick={deleteAll} className="delete_all">
                <i className="fas fa-trash"></i>
              </button>
            </div>
            <div className="select">
              <select
                name="todos"
                className="filter-todo"
                onChange={statusHandler}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default Form;
