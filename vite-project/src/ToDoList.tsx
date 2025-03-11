import React, { useState } from 'react'


function ToDoList(){

    const[tasks, setTasks] = useState(["eat breakfast", "take a shower", "walk the dog"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index: number) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index: number) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

   function moveTaskDown(index: number) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(<div className='to-do-list'>
        <h1>To-DoList</h1>
        <div>
            <input type="text" 
            placeholder='Enter a task ...'
            value={newTask}
            onChange={handleInputChange}            
            />
            <button className='add-button'
            onClick={addTask}>
              Add
            </button>


        </div>
        <ol>
            {tasks.map((tasks, index) =>
            <li key={index}>
                <span className='text'>{tasks}</span>
                <button className='delete-button'
                onClick={() => deleteTask(index)}>
                    Delete
                </button>
                <button className='move-button'
                onClick={() => moveTaskUp(index)}>
                    Up
                </button>
                <button className='move-button'
                onClick={() => moveTaskDown(index)}>
                    Down
                </button>
            </li>

            )}
        </ol>


    </div>);
}
export default ToDoList