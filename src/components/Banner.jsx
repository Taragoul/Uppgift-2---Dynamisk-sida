import React from "react";
import "../assets/styles/Banner.css";
import ProfilePic from "./ProfilePic";

const Banner = ({
    backgroundImage,
    name,
    title,
    profilePicSrc,
    profilePicAlt,
}) => (
    <div
        className="banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="profile-pic-overlay">
            <ProfilePic src={profilePicSrc} alt={profilePicAlt} />
            <div className="profile-text">
                <h2>{name}</h2>
            </div>
            <div className="profile-text">{title}</div>
        </div>
    </div>
);

export default Banner;