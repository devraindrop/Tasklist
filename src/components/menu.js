import React, { useState } from 'react';
import AddTask from './addtask';
import AllTask from './alltasks';

const Menu = ({ onLogout, isLoggedIn }) => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [showTaskList, setShowTaskList] = useState(false);

    const handleShowAdd = () => {
        setShowAddTask(true);
        setShowTaskList(false);
      };
    
      const handleListTasks = () => {
        setShowTaskList(true);
        setShowAddTask(false);
      };


      return (
        <>
        <nav className="bg-teal-500 py-4 flex items-center justify-between px-8">
        <div className="flex items-center">
          <div className="bg-black rounded-full h-12 w-12 flex items-center justify-center mr-4">
            <h3 className="text-white text-2xl font-semibold">FF</h3>
          </div>
          <h3 className="text-teal text-2xl font-semibold">Fun Fox Test</h3>
        </div>
        {isLoggedIn &&
        <ul className="flex space-x-4">
          <li>
            <button
              className="text-white font-semibold px-4 py-2 rounded hover:bg-teal-600 focus:outline-none"
              onClick={onLogout}
            >
              Logout
            </button>
          </li>
          <li>
            <button
              className={`${
                showAddTask ? "bg-teal-600" : "bg-teal-500"
              } text-white font-semibold px-4 py-2 rounded hover:bg-teal-600 focus:outline-none`}
              onClick={handleShowAdd}
            >
              Add Task
            </button>
          </li>
          <li>
            <button
              className={`${
                showTaskList ? "bg-teal-600" : "bg-teal-500"
              } text-white font-semibold px-4 py-2 rounded hover:bg-teal-600 focus:outline-none`}
              onClick={handleListTasks}
            >
              List Tasks
            </button>
          </li>
        </ul>
      }
      </nav>
    <div className="bg-gray-100">
    
          {isLoggedIn &&
          <div className="container mx-auto py-8">
            <h3 className="text-3xl font-semibold mb-4">Welcome!</h3>
            {showAddTask && <AddTask />}
            {showTaskList && <AllTask />}
          </div>
            }
        </div>
        </>
      );



}
 
export default Menu;