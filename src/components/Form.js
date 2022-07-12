import React from 'react';

const Form = (props) => {
    const {input, inputChange, addItems} = props

    return (
        <div>
            <h1>Todo List</h1>
            <form className='input' onSubmit={addItems}>
                <label htmlFor="taskInput"></label>
                <input required type="text" value={input} onChange={inputChange}/>
                <button className="btn-add" type="submit" alt="Add Item">Add Item</button>
            </form>
        </div>
    );
}

export default Form;