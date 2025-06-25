import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 p-5 mt-5 rounded-xl shadow-xl">
      <div className="bg-white/10 border border-white/10 mb-3 py-2 px-4 text-md rounded-lg grid grid-cols-5 text-nowrap justify-between text-white font-bold">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h3 className="w-1/5">Active Task</h3>
        <h3 className="w-1/5">Completed</h3>
        <h5 className="w-1/5">Failed</h5>
      </div>

      <div>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 text-nowrap bg-white/5 hover:bg-white/10 transition-all border border-white/10 mb-2 py-2 px-4 rounded-lg text-center shadow-sm"
          >
            <h2 className="text-sm md:text-lg font-thin w-1/5 text-white">
              {elem.firstName} {elem.lastName}
            </h2>
            <h3 className="text-sm md:text-lg font-medium w-1/5 text-cyan-400">
              {elem.taskStats.newTask}
            </h3>
            <h5 className="text-sm md:text-lg font-medium w-1/5 text-yellow-400">
              {elem.taskStats.active}
            </h5>
            <h5 className="text-sm md:text-lg font-medium w-1/5 text-emerald-400">
              {elem.taskStats.completed}
            </h5>
            <h5 className="text-sm md:text-lg font-medium w-1/5 text-rose-400">
              {elem.taskStats.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
