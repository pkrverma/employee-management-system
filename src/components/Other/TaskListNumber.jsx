import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="w-[45%] px-9 py-6 bg-red-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskStats.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] px-9 py-6 bg-blue-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskStats.active}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="w-[45%] px-9 py-6 bg-green-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-[45%] px-9 py-6 bg-yellow-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
