import React from "react";

export const Card = ({ title, value, icon, color }) => {
  return (
    <div className="border rounded-2 px-3 py-4 d-flex justify-content-between align-items-center">
      <div className="d-flex flex-column">
        <p className="text-muted m-0">{title}</p>
        <p className="fs-2 m-0 fw-bold">{value}</p>
      </div>
      <i class={`bi ${icon} fs-2`} style={{ color: color }}></i>
    </div>
  );
};
