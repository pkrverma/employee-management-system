import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded">
      <div className="bg-zinc-400 mb-2 py-2 px-4 rounded flex justify-between">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h3 className="w-1/5">Active Task</h3>
        <h3 className="w-1/5">Completed</h3>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div>
        {userData.map(function (elem, idx) {
          return (
            <div
              className="border-2 border-gray-600 mb-2 py-2 px-4 rounded flex justify-between"
              key={idx}
            >
              <h2 className="text-lg font-medium w-1/5 text-white">
                {elem.firstName}{" "}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskStats.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskStats.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-400">
                {elem.taskStats.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5">
                {elem.taskStats.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
