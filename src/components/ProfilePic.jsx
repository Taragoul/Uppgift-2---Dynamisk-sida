import React from "react";
import "../assets/styles/ProfilePic.css";

const ProfilePic = ({ src, alt = "Profile Picture" }) => (
    <div className="profile-pic-container">
        <img src={src} alt={alt} className="profile-pic" />
    </div>
);

export default ProfilePic;