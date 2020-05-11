import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Options(items = [], multiSelect = false) {

    const [selection, setSelection] = useState([]);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
          if (!multiSelect) {
            setSelection([item]);

          } else if (multiSelect) {
            setSelection([...selection, item]);
          }
        } else {
          let selectionAfterRemoval = selection;
          selectionAfterRemoval = selectionAfterRemoval.filter(
            current => current.id !== item.id
          );
          setSelection([...selectionAfterRemoval]);
        }
    }

    function isItemInSelection(item) {
        if (selection.find(current => current.ID === item.ID)) {
            return true;
        }
        return false;
    }

    return (
        <ul className="list">
            {items.map(item => (
                <li className="list-item" key={item.ID}>
                    <Link to={`/marca/${item.ID}`} >
                        <button 
                            type="button" 
                            onClick={() => handleOnClick(item)}
                        >
                            <span>{item.Name}</span>
                            <span>{isItemInSelection(item) && 'Selecionado'}</span>
                        </button>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Options

