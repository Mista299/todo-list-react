import './TodoCounter.css';

function TodoCounter({total, completed}) {
    if (total === completed) {
      return <h1>¡No hay tareas!</h1>;
  
    }
    return(
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    );
}
export {TodoCounter};