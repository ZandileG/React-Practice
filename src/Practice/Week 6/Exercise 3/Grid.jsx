import React from "react";
import ContentCard from "./ContentCard";
import "./Grid.css";

function Grid() {
  return (
    <div className="grid-container">
      <ContentCard />
      <ContentCard />
      <ContentCard />
      {/* Add more ContentCard components as needed */}
    </div>
  );
};

export default Grid;