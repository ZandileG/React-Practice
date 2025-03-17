import React from "react";
import "./ProfileCard.css"

function ProfileCard() {
  return (
    <div className="card">
      <img src="profile-pic.jpg" alt="Profile" className="profileImg" />
      <h2 className="profileName">Jane Doe</h2>
      <p className="profileBio">Frontend Developer who loves to create beautiful and performant web applications.</p>
    </div>
  );
};

export default ProfileCard;