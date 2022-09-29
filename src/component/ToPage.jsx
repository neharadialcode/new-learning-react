import React, { useState } from "react";
import { dataArray } from "./Helper";
import { BoxIcon, DeleteIcon, SmallCheck } from "./Icons";
import { data } from "./Data";
import Cards from "./Cards";
import { Card } from "./Cards";

const statCards = [
  {
    title: "Total Tasks",
    value: data.length,
    icon: "bi-hdd-stack",
    color: "rgba(13, 110, 253, 1)",
  },
  {
    title: "Completed",
    value: data.filter((item) => item.isCompleted === true).length,
    icon: "bi-check2-circle",
    color: "rgba(25, 135, 84, 1)",
  },
  {
    title: "New Projects",
    value: data.filter(
      (item) => item.isCompleted === false && item.isNew === true
    ).length,
    icon: "bi-star",
    color: "rgba(13, 202, 240, 1)",
  },
  {
    title: "Updates",
    value: data.filter(
      (item) => item.isCompleted === false && item.isNew === false
    ).length,
    icon: "bi-recycle",
    color: "rgba(255, 193, 7, 1)",
  },
];

const unCompleteTasks = data.filter((item) => item.isCompleted === false);

console.log(unCompleteTasks, "data.isNew");

const ToPage = () => {
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
      <div className="container my-4">
        <div className="row">
          {statCards.map((card) => (
            <div className="col-3 ">
              <Card
                title={card.title}
                value={card.value}
                icon={card.icon}
                color={card.color}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <Cards title="Total tasks" number="100" /> */}
      <div className="container pb-5 ">
        <div className="pb-4">
          <button className="border py-2 px-3 bg-transparent">
            Today’s Tasks
          </button>
          <button className="border py-2 px-3 ms-3 bg-transparent">
            Previous Tasks
          </button>
        </div>
        {unCompleteTasks.map((item, index) => (
          <div className="row border py-2 px-2 mx-0" key={index}>
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
              <BoxIcon /> <span>{item.dueOn}</span>
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
        ))}
      </div>
    </>
  );
};

export default ToPage;
