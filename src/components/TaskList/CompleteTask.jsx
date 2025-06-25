import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full lg:w-[300px] p-5 rounded-xl border border-green-500/30 bg-green-500/10 backdrop-blur-md shadow-lg text-white">
      <div className="flex justify-between items-center">
        <h3 className="bg-white/10 text-sm px-3 py-1 rounded capitalize text-green-300 border border-green-500/30">
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
      <div className="mt-4">
        <button
          disabled
          className="w-full bg-green-500/20 text-green-300 border border-green-400/30 px-4 py-2 rounded-lg backdrop-blur-md cursor-not-allowed"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
