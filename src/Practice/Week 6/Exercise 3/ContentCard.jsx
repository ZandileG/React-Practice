import React from "react";
import "./ContentCard.css";

function ContentCard() {
  return (
    <div className="content-card">
      <img src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" alt="Content" className="card-image" />
      <h2>Content Title</h2>
      <p>Some interesting content goes here. This is the card description.</p>
    </div>
  );
};

export default ContentCard;