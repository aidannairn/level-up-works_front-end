import React from "react";
import "../../styles/teacher-profile-viewer/teacher-profile-viewer.css";

export default function ProfileCard({ ProfilePic }) {
    return (
        <>
            <div className="profile-c-main">
                <div className="profile-c-top">
                    <img
                        src={`https://cdn.filestackcontent.com/${ProfilePic}`}
                        alt=""
                        width={100}
                    />
                </div>
                <div className="profile-c-bottom">
                    <button className="profile-c-btns">EDIT PROFILE</button>
                    <br />
                    <button className="profile-c-btns">CHANGE PHOTO</button>
                    <br />
                    <button className="profile-c-btns">SETTINGS </button>
                    <br />
                </div>
            </div>
        </>
    );
}
