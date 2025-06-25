import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div id="taskTable" className="backdrop-blur-md bg-white/5 border border-white/10 p-5 mt-5 rounded-xl shadow-xl overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="bg-white/10 border border-white/10 mb-3 py-2 px-4 text-md rounded-lg grid grid-cols-5 text-nowrap justify-between text-white font-bold">
          <h2 className="w-full text-left">Employee Name</h2>
          <h3 className="w-full text-center">New Task</h3>
          <h3 className="w-full text-center">Active Task</h3>
          <h3 className="w-full text-center">Completed</h3>
          <h5 className="w-full text-center">Failed</h5>
        </div>

        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 text-nowrap bg-white/5 hover:bg-white/10 transition-all border border-white/10 mb-2 py-2 px-4 rounded-lg shadow-sm"
          >
            <h2 className="text-sm md:text-base text-white w-full text-left">
              {elem.firstName} {elem.lastName}
            </h2>
            <h3 className="text-sm md:text-base text-cyan-400 text-center w-full">
              {elem.taskStats.newTask}
            </h3>
            <h5 className="text-sm md:text-base text-yellow-400 text-center w-full">
              {elem.taskStats.active}
            </h5>
            <h5 className="text-sm md:text-base text-emerald-400 text-center w-full">
              {elem.taskStats.completed}
            </h5>
            <h5 className="text-sm md:text-base text-rose-400 text-center w-full">
              {elem.taskStats.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
