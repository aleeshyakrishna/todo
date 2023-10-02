import React, {useState} from 'react';
import './App.css';
//importing components

import Form from './components/Form';
import TodoList from './components/TodoList';
// import Todo from './components/Todo';

function App() {
  const [inputText, setInputText]=useState(" ")
  const [todos,setTodos]=useState([]);
  return (
    <div className="App">
     <header>
      <h1>Todo list</h1>
     </header>
     <Form  todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
     <TodoList setTodos={setTodos} todos={todos} />
     
    </div>
  )
}

export default App;
