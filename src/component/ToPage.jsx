import React, { useState } from "react";
import { dataArray } from "./Helper";
import { BoxIcon, DeleteIcon, SmallCheck } from "./Icons";

const ToPage = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  return (
    <>
      <div className="bg_blue text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="mb-0">Hello 👋</p>
              <h2>Ravi Sirswa</h2>
            </div>
            <div className="col-6 text-end d-flex flex-column justify-content-center align-items-end">
              <div className="btn bg-white">Log Out</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          {dataArray.map((obj, index) => (
            <div className="col-lg-3 col-sm-6 pt-4">
              <div className="task_card" key={index}>
                <div>
                  <p className="mb-0">{obj.para}</p>
                  <h2 className="mb-0">{obj.num}</h2>
                </div>
                {obj.iconUrl}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container pb-5 ">
        <div className="pb-4">
          <button className="border py-2 px-3 bg-transparent">
            Today’s Tasks
          </button>
          <button className="border py-2 px-3 ms-3 bg-transparent">
            Previous Tasks
          </button>
        </div>
        <div className="row border py-2 px-2 mx-0">
          <div className="col-4">
            <p className="mb-0">Project Name</p>
          </div>
          <div className="col-4 text-center">
            <BoxIcon /> <span>Due Date</span>
          </div>
          <div className="col-4 text-end ">
            <span className="d-inline-block">
              <SmallCheck />
            </span>
            <span className="d-inline-block ms-3">
              <DeleteIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToPage;
