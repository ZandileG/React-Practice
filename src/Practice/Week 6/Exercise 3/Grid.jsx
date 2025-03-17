import React from "react";
import ContentCard from "./ContentCard";
import "./Grid.css";

function Grid() {
  return (
    <div className="grid-container">
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  );
};

export default Grid;