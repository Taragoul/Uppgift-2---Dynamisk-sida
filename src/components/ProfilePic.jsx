import React from "react";
import "../assets/styles/ProfilePic.css";
import zakImg from "../assets/zak.jpg";


const ProfilePic = () => (
    <div className="profile-pic-container">
        <img src={zakImg} alt="ProfilePicture" className="profile-pic" />
    </div>
);
export default ProfilePic;