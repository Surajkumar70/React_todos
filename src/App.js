import React from 'react';
import './App.css';
import TodaFonts from './components/TodoForm';
import Todolist from './components/Todolist';


function App() {
  return (
    <div className="todo-app">
      <Todolist/>
    </div>
  );
}

export default App;
