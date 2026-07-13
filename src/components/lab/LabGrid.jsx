import React from "react";
import LabCard from "./LabCard.jsx";

const LabGrid = ({ demos }) => {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {demos.map((demo) => (
        <LabCard key={demo.title} demo={demo} />
      ))}
    </div>
  );
};

export default LabGrid;
