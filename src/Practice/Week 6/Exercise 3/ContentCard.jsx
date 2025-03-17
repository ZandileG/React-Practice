import React from "react";
import "./ContentCard.css";

function ContentCard() {
  return (
    <div className="content-card">
      <img src="placeholder-image.jpg" alt="Content" className="card-image" />
      <h2>Content Title</h2>
      <p>Some interesting content goes here. This is the card description.</p>
    </div>
  );
};

export default ContentCard;