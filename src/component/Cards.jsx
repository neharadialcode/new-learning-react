import React from "react";

export const Card = ({ title, value, icon, color }) => {
  return (
    <div className="task_card">
      <div className="d-flex flex-column">
        <p className="text-muted m-0">{title}</p>
        <p className="fs-2 m-0 fw-bold">{value}</p>
      </div>
      <i className={`bi ${icon} fs-2`} style={{ color: color }}></i>
    </div>
  );
};
