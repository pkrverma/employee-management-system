import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-zinc-600 text-sm px-3 py-1 rounded capitalize">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold normal-case">
        {data.taskTitle}
      </h2>
      <p className="text-sm mt-2 normal-case">{data.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-md">
          Mark as completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded-md">
          Mark as failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
