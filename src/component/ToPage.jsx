import React, { useEffect, useState } from "react";
import { data } from "./Data";
import { Card } from "./Cards";
import TaskItem from "./TaskItem";
import { db } from "../firebase";
import { onSnapshot, doc, collection, setDoc } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const ToPage = () => {
  const [valuee, setValue] = useState([]);
  class Task {
    constructor(
      id = uuidv4(),
      title,
      dueOn = new Date(),
      isNew = true,
      isCompleted = false,
      isRemoved = false
    ) {
      this.id = id;
      this.title = title;
      this.dueOn = dueOn;
      this.isNew = isNew;
      this.isCompleted = isCompleted;
      this.isRemoved = isRemoved;
    }
  }

  const [inputValue, setInputValue] = useState(new Task("", ""));

  const submitHandler = async () => {
    if (inputValue.title !== "" && inputValue.date !== "") {
      await setDoc(doc(db, "taskCollection", uuidv4()), inputValue);
      setInputValue({
        title: "",
        date: "",
      });
    }
  };
  const statCards = [
    {
      title: "Total Tasks",
      value: valuee.length,
      icon: "bi-hdd-stack",
      color: "rgba(13, 110, 253, 1)",
    },
    {
      title: "Completed",
      value: valuee.filter((item) => item.isCompleted === true).length,
      icon: "bi-check2-circle",
      color: "rgba(25, 135, 84, 1)",
    },
    {
      title: "New Projects",
      value: valuee.filter(
        (item) => item.isCompleted === false && item.isNew === true
      ).length,
      icon: "bi-star",
      color: "rgba(13, 202, 240, 1)",
    },
    {
      title: "Updates",
      value: valuee.filter(
        (item) => item.isCompleted === false && item.isNew === false
      ).length,
      icon: "bi-recycle",
      color: "rgba(255, 193, 7, 1)",
    },
  ];

  const unCompleteTasks = valuee.filter((item) => item.isCompleted === false);

  const sortedTasks = unCompleteTasks.sort((first, second) => {
    return new Date(first.date) - new Date(second.date);
  });
  useEffect(() => {
    onSnapshot(collection(db, "taskCollection"), (cl) => {
      setValue(cl.docs.map((obj) => obj.data()));
    });
  }, []);

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

      <div className="row mx-0 justify-content-center py-5">
        <div className="col-4">
          <h4 className="text-uppercase text-center">Creat Task</h4>
          <div className="my-1">
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, title: e.target.value })
              }
              className="text-black w-100"
              type="text"
              name=""
              placeholder="Name"
              id=""
              value={inputValue.title}
            />
          </div>
          <div className="my-1">
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, date: e.target.value })
              }
              className="text-black w-100"
              type="datetime-local"
              name=""
              placeholder="Date"
              id=""
              value={inputValue.date}
            />
          </div>
          <div className="text-center">
            <button
              onClick={submitHandler}
              className="btn btn-success text-uppercase mt-2"
            >
              Create
            </button>
          </div>
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
        {sortedTasks.map((item, index) => (
          <TaskItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default ToPage;
