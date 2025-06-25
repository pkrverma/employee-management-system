import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="grid mt-10 flex-wrap justify-between gap-2 grid-cols-2 text-white lg:flex lg:flex-row lg:uppercase">
      <div className="lg:w-[23%] px-9 py-6 bg-sky-500/20 border border-sky-500/30 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-sky-300">
          {data.taskStats.newTask}
        </h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="lg:w-[23%] px-9 py-6 bg-orange-500/20 border border-orange-500/30 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-orange-300">
          {data.taskStats.active}
        </h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>

      <div className="lg:w-[23%] px-9 py-6 bg-green-500/20 border border-green-500/30 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-green-300">
          {data.taskStats.completed}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="lg:w-[23%] px-9 py-6 bg-red-500/20 border border-red-500/30 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-red-300">
          {data.taskStats.failed}
        </h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
