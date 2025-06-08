import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-blue-800 rounded-xl">
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
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
