import React from 'react';
import {TodoContext} from '../TodoContext';
import './index.css';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
    return(
      <input 
        placeholder="Cortar Cebolla"
        className='TodoSearch'
        value={searchValue}
        onChange={(event)=> {
          setSearchValue(event.target.value)
        }}
      />
    );
}
export {TodoSearch};