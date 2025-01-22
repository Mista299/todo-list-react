import React from 'react';
import { AppUI } from './AppUI.js';
import {useLocalStorage} from './useLocalStorage.js'
// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'aprender React', completed: false},
//   {text: 'lavar platos', completed: false},
//   {text: 'jakakaka', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(
    todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    todo => (todo.text.toLowerCase().includes(searchValue))
  );
  console.log('Los usuarios buscan todos de ' + searchValue);

  const completeTodo = (text) => {
    console.log("completando todo: ", text);
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (<AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  />);
}

export default App;
