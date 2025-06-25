import React, { useContext, useState } from "react";
import NewTask from "../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((emp) => {
      if (emp.firstName.toLowerCase() === assignTo.toLocaleLowerCase()) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskStats: {
            ...emp.taskStats,
            newTask: emp.taskStats.newTask + 1,
          },
        };
      }
      return emp;
    });

    setUserData(updatedData);
    localStorage.setItem(
      "employees",
      JSON.stringify({ employees: updatedData })
    );

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-6 mt-6 rounded-xl bg-white/5 backdrop-blur-md shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1),_0_8px_24px_rgba(0,0,0,0.6)] border border-white/10 transition-all duration-500">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-md bg-white/10 text-white placeholder-white/60 border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 transition-all"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-md bg-white/10 text-white border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4 transition-all"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to <span className="text-sm text-gray-400 mb-0.5s">(Use first name only)</span></h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-md bg-white/10 text-white placeholder-white/60 border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 transition-all"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-md bg-white/10 text-white placeholder-white/60 border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4 transition-all"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded-md bg-white/10 text-white placeholder-white/60 border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            cols={30}
            rows={10}
          ></textarea>
          <button
            className="w-full mt-4 py-3 px-6 rounded-md text-sm font-semibold text-white 
             bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 
             shadow-[0_4px_20px_rgba(34,211,238,0.3)] 
             transition-all duration-300 ease-in-out transform hover:scale-[1.01] active:scale-[0.98]"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
