import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data, loggedInUser }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (status) => {
    if (!loggedInUser || !loggedInUser.email) return;

    const updatedEmployees = userData.map((emp) => {
      if (emp.email === loggedInUser.email) {
        const updatedTasks = emp.tasks.map((task) => {
          if (
            task.taskTitle === data.taskTitle &&
            task.taskDate === data.taskDate &&
            task.active
          ) {
            return {
              ...task,
              active: false,
              completed: status === "completed",
              failed: status === "failed",
            };
          }
          return task;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskStats: {
            ...emp.taskStats,
            active: Math.max(emp.taskStats.active - 1, 0),
            completed:
              status === "completed"
                ? emp.taskStats.completed + 1
                : emp.taskStats.completed,
            failed:
              status === "failed"
                ? emp.taskStats.failed + 1
                : emp.taskStats.failed,
          },
        };
      }

      return emp;
    });

    setUserData(updatedEmployees);
  };

  return (
    <div className="flex-shrink-0 h-full lg:w-[300px] p-5 rounded-xl border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md shadow-xl text-white">
      <div className="flex justify-between items-center">
        <h3 className="bg-white/10 text-sm px-3 py-1 rounded capitalize text-yellow-300 border border-yellow-500/30">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-300">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold normal-case text-white">
        {data.taskTitle}
      </h2>
      <p className="text-sm mt-2 normal-case text-gray-300">
        {data.taskDescription}
      </p>
      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={() => updateTaskStatus("completed")}
          className="bg-green-500/20 border border-green-500/30 text-green-300 backdrop-blur-md hover:bg-green-500/30 px-3 py-2 rounded-lg text-sm font-medium transition-all"
        >
          Completed
        </button>
        <button
          onClick={() => updateTaskStatus("failed")}
          className="bg-red-500/20 border border-red-500/30 text-red-300 backdrop-blur-md hover:bg-red-500/30 px-3 py-2 rounded-lg text-sm font-medium transition-all"
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
