import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoTaskListsAtom } from './login';

const AllTask = () => {
  const todoTaskLists = useRecoilValue(todoTaskListsAtom);
  const setTodoTaskLists = useSetRecoilState(todoTaskListsAtom);

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
    <div>
      <h3>Task List</h3>
      {todoTaskLists.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {todoTaskLists.map((task, index) => (
            <li key={index}>
              <strong>Title:</strong> {task.title} <br />
              <strong>Description:</strong> {task.description} <br />
              <strong>Group:</strong> {task.group}
              <button onClick={() => handleToggleCompletion(index)}>
                {task.isCompleted ? "Incomplete" : "Complete"}
              </button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllTask;
