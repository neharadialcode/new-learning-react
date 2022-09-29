import React from "react";
import { BoxIcon, DeleteIcon, SmallCheck } from "./Icons";

const TaskItem = ({ item }) => {
  const markComplete = () => {
    console.log(item.id);
  };

  return (
    <div className="row border py-2 px-2 mx-0">
      <div className="col-4 d-flex align-items-center ">
        <div
          className="dot"
          style={{
            backgroundColor: `${item.isNew ? "blue" : "yellow"}`,
          }}
        ></div>

        <p className="mb-0 ms-2">{item.title}</p>
      </div>
      <div className="col-4 text-center">
        <BoxIcon /> <span>{new Date(item.dueOn).toDateString({})}</span>
      </div>
      <div className="col-4 text-end ">
        <button onClick={markComplete} className="d-inline-block">
          <SmallCheck />
        </button>
        <span className="d-inline-block ms-3">
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
