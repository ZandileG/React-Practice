import React from "react";
import "./ProfileCard.css"

function ProfileCard() {
  return (
    <div className="card">
      <img src="https://static.vecteezy.com/system/resources/previews/029/271/069/non_2x/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg" alt="Profile" className="profileImg" />
      <h2 className="profileName">Jane Doe</h2>
      <p className="profileBio">Front-end Developer who loves to create beautiful and performant web applications.</p>
    </div>
  );
};

export default ProfileCard;