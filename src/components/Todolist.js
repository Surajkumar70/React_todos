import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos,todo];

    // setting the state to the localstorage.
    // localStorage.setItem('todos', JSON.stringify(newTodos));
    
    setTodos(newTodos);
    console.log(...todos);

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    // const updated = todos.map(item => (item.id === todoId ? newValue : item))
    
    // setting the state to the localstorage after updating.

    // localStorage.setItem('todos', JSON.stringify(updated));
    // setTodos(updated);

  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    // setting the state to the localstorage. 

    // localStorage.setItem('todos', JSON.stringify(removedArr));

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // useEffect(() => {

  //   // getting data from local storage and setting it to state named todos
    
  //   const data = JSON.parse(localStorage.getItem("todos"))
  //   setTodos(data)
  // }, [])


  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
