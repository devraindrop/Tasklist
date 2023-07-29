import { useState } from "react";
import { userGroupState, todoTaskListsAtom } from './login';
import '../css/addtask.css';

import {
    useRecoilState,
  } from 'recoil';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [userGroup, ] = useRecoilState(userGroupState);
    const [todoTaskLists, setTodoTaskLists] = useRecoilState(todoTaskListsAtom);

    const handleAddTask = () => {
        // Perform logic to add the task, e.g., call an API or update the task list state.
        // For this example, we'll just log the task details to the console.
        console.log('New Task:');
        console.log('Title:', title);
        console.log('Description:', description);
        setTodoTaskLists([...todoTaskLists, {title:title,description:description,isCompleted:false,group:userGroup}])
 
        // Reset the form after adding the task
        setTitle('');
        setDescription('');
      };

    return ( 
        <div>
            <div className='form-container'>
                <h3 className="text">Add Task</h3>
                <form className='inputform'>
                    <div className="form-row">
                        <div className="input-data">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div className="underline"></div>
                            <label>Title:</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <div className="underline"></div>
                            <label>Description:</label>
                        </div>
                    </div>
                    <button type="button" onClick={handleAddTask}>
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
}
 
export default AddTask;
