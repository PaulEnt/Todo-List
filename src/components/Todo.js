import React from 'react';

const Todo = (props) => {
    const { items, completedItems, deleteItems } = props

    return (
        <ul className='todo'>
            {items.map((task, index) =>
                <li key={index}>
                    <div>
                        <label className='Container'>
                            <input type="checkbox" onClick={() => completedItems(index)} />
                            <span className="checkmark"></span>
                        </label>
                        <span>{task.task}</span>
                    </div>
                    <button onClick={() => deleteItems(index)}>Remove Item</button>
                </li>
            )}
        </ul>
    )
}

export default Todo;