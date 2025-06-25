import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, loggedInUser }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleAcceptTask = () => {
    // Step 1: Map over all employees
    const updatedEmployees = userData.map((employee) => {
      // Step 2: Match the logged-in employee by email
      if (employee.email === loggedInUser.email) {
        // Step 3: Update tasks for this employee
        const updatedTasks = employee.tasks.map((task) => {
          if (
            task.taskTitle === data.taskTitle &&
            task.taskDate === data.taskDate &&
            task.newTask
          ) {
            return {
              ...task,
              newTask: false,
              active: true,
            };
          }
          return task;
        });

        // Step 4: Update taskStats for the employee
        const updatedStats = {
          ...employee.taskStats,
          newTask: employee.taskStats.newTask - 1,
          active: employee.taskStats.active + 1,
        };

        // Step 5: Return updated employee
        return {
          ...employee,
          tasks: updatedTasks,
          taskStats: updatedStats,
        };
      }

      // Other employees remain unchanged
      return employee;
    });

    // Step 6: Update the context (triggers re-render + storage sync)
    setUserData(updatedEmployees);
  };

  return (
    <div className="flex-shrink-0 h-full lg:w-[300px] p-5 rounded-xl border border-blue-400/30 bg-blue-400/10 backdrop-blur-md shadow-lg text-white">
      <div className="flex justify-between items-center">
        <h3 className="bg-white/10 text-sm px-3 py-1 rounded capitalize text-blue-300 border border-blue-500/30">
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
      <div className="flex justify-between mt-4">
        <button
          onClick={handleAcceptTask}
          className="bg-green-500/20 hover:bg-green-500/40 text-green-300 border border-green-400/30 py-1 px-3 text-sm rounded-md backdrop-blur-lg transition"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
