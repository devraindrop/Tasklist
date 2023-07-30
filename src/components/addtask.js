import { useState } from "react";
import { userGroupState, todoTaskListsAtom } from './login';

import {
    useRecoilState,
  } from 'recoil';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [userGroup, ] = useRecoilState(userGroupState);
    const [todoTaskLists, setTodoTaskLists] = useRecoilState(todoTaskListsAtom);

    const handleAddTask = () => {
        setTodoTaskLists([...todoTaskLists, {title:title,description:description,isCompleted:false,group:userGroup}])
 
        // Reset the form after adding the task
        setTitle('');
        setDescription('');
      };

      return (
        <div className="container mx-auto py-8">
          <div className="max-w-md mx-auto bg-teal-200 text-teal-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-teal-500 text-black px-4 py-2">
              <h3 className="text-xl font-semibold">Add Task</h3>
            </div>
            <div className="px-4 py-4">
              <div className="mb-4">
                <label className="text-teal-800 font-bold mb-2" htmlFor="title">Title:</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-teal-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-teal-800 font-bold mb-2" htmlFor="description">Description:</label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-teal-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="text-right">
                <button
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleAddTask}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      );

}
 
export default AddTask;
