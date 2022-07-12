import React, { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const addItems = (e) => {
        e.preventDefault()
        if (input !== '') {
                const newItem = {
                    task: input,
                    completed: false
                }
                setItems([...items, newItem])
                setInput('')
            }   
    }

    const deleteItems = (index) => {
        const newItems = [...items]
        
        newItems.splice(index, 1)
        setItems(newItems)
    }

    const completedItems = (index) => {
        const newItems = [...items]
        if (newItems[index].completed === false) {
          newItems[index].completed = true
        } else {
          newItems[index].completed = false
        }
        setItems(newItems)
      }

  return (
    <div className="App">
        <Form
            input={input}
            inputChange={inputChange}
            addItems={addItems}
        />
        <Todo
            items={items}
            completedItems={completedItems}
            deleteItems={deleteItems}
        />
    </div>
  );
}

export default App;
