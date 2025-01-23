import './App.css';
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal, // Asegúrate de tener acceso a setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className='container'>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        <CreateTodoButton setOpenModal={setOpenModal} /> {/* Pasa setOpenModal como prop */}

        {openModal && (
          <Modal>
            <h2>Funcionalidad de agregar TODO</h2>
            <TodoForm />
            <button
              className="close-modal"
              onClick={() => setOpenModal(false)} // Cierra el modal al hacer clic
            >
              Cerrar
            </button>
          </Modal>
        )}
      </div>
    </React.Fragment>
  );
}

export { AppUI };
