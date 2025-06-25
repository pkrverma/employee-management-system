import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask data={elem} key={idx} loggedInUser={data} />;
        }
        if (elem.newTask) {
          return <NewTask data={elem} key={idx} loggedInUser={data} />;
        }
        if (elem.completed) {
          return <CompleteTask data={elem} key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask data={elem} key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
