import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {    
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [inputValue, setInputValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(inputValue);
        setOpenModal(false);
    }
    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
            placeholder='Cortar cebolla para el almuerzo'
            value={inputValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button--cancel"
                    onClick={() => setOpenModal(false)}                   
                >Cancelar</button>
                <button
                    className="TodoForm-button--add"
                    onClick={onSubmit}                   

                >Añadir</button>
            </div>
        </form>
    )
}
export {TodoForm}