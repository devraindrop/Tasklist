import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userGroupState, todoTaskListsAtom } from './login';

const AllTask = () => {
  const todoTaskLists = useRecoilValue(todoTaskListsAtom);
  const setTodoTaskLists = useSetRecoilState(todoTaskListsAtom);
  const userGroup = useRecoilValue(userGroupState);
  const filteredTasks = todoTaskLists.filter((task) => task.group === userGroup);
console.log(userGroup);

  const handleDeleteTask = (index) => {
    setTodoTaskLists((prevTaskLists) =>
      prevTaskLists.filter((task, i) => i !== index)
    );
  };

  const handleToggleCompletion = (index) => {
    setTodoTaskLists((prevTaskLists) =>
      prevTaskLists.map((task, i) =>
        i === index ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };


  return (
    <div className="container mx-auto py-8">
      <h3 className="text-xl font-semibold mb-4">Task List</h3>
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul className="grid gap-4">
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div>
                <strong className="text-lg mb-2">Title:</strong> {task.title} <br />
                <strong className="text-lg mb-2">Description:</strong> {task.description} <br />
                <strong className="text-lg mb-2">Group:</strong> {task.group}
              </div>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded ${
                    task.isCompleted
                      ? "bg-teal-500 hover:bg-teal-600 text-white"
                      : "bg-orange-500 hover:bg-orange-600 text-white"
                  }`}
                  onClick={() => handleToggleCompletion(index)}
                >
                  {task.isCompleted ? "Incomplete" : "Complete"}
                </button>
                <button
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );


};

export default AllTask;
