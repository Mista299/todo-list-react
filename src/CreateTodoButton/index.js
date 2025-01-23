import React from 'react';
import './CreateTodoButton.css'; // Estilos que puedas tener

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState); // Cambia el estado para abrir/cerrar el modal
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton} // Maneja el clic
    >
      +
    </button>
  );
}

export { CreateTodoButton };
