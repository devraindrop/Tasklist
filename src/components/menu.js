import React, { useState } from 'react';
import AddTask from './addtask';
import AllTask from './alltasks';

const Menu = ({ onLogout }) => {
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
        <div>
    <nav>
      <ul>
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
        <li>
          <button onClick={handleShowAdd}>Add Task</button>
        </li>
        <li>
          <button onClick={handleListTasks}>List Tasks</button>
        </li>
      </ul>
    </nav>

    <div>
            <h3>Welcome!</h3>
            {showAddTask && <div><AddTask/></div>}
            {showTaskList && <div><AllTask /></div>}
          </div> 
        </div>
     );
}
 
export default Menu;