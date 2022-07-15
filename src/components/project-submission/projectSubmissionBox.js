import React from "react";
import { useState } from "react";
import "../../styles/project-submission/projectSubmissionBox.css";
import Modal from "../project-submission/Modal";

export default function ProjectSubmissionBox({
    tick,
    item: { studentID, dateSubmitted, firstname, profilePic, submission, time },
}) {
    const [checkbox, setCheckbox] = useState("");
    const tickCheckbox = (e) => {
        setCheckbox(e.target.id);
    };

    const [clicked, setClicked] = useState(true);
    const handleClick = () => {
        setClicked(!clicked);
    };
    const [showModal, setShowModal] = useState(false);
    const triggerModal = () => setShowModal(true);

    let date = new Date(dateSubmitted);

    return (
        <>
            <div className="white-box-container">
                <label className="tick-box-container">
                    <input
                        className="ticky"
                        onClick={tickCheckbox}
                        type="checkbox"
                        id={studentID}
                        onChange={tick}
                    ></input>
                    <span className="checkmark"></span>
                </label>
                <div className="white-box-inner-container">
                    <div
                        className="project-submission-profile-pic"
                        onClick={handleClick}
                    >
                        <img
                            src={`https://cdn.filestackcontent.com/${profilePic}`}
                            alt="student pic"
                            width={50}
                        />
                    </div>

                    {clicked ? (
                        <div className="project-submitted-text">
                            {firstname.toUpperCase()} wants to show their
                            project
                        </div>
                    ) : (
                        <>
                            <div className="project-submission-submit-details">
                                <div className="project-submitted-text">
                                    {firstname.toUpperCase()} submitted thier
                                    project
                                </div>
                                <div className="project-submitted-screen-shot">
                                    <img
                                        onClick={triggerModal}
                                        src={submission}
                                        alt=""
                                        width={200}
                                    />{" "}
                                    <br></br>
                                    <img
                                        onClick={triggerModal}
                                        src="images/projectSubmission/zoom-icon.svg"
                                        alt=" "
                                    />{" "}
                                    &nbsp; ENLARGE PHOTO
                                </div>
                                {showModal && (
                                    <Modal
                                        name={firstname.toUpperCase()}
                                        submission={submission}
                                        closeModal={setShowModal}
                                    />
                                )}
                            </div>
                        </>
                    )}
                    <span className="project-submission-white-box-white-space"></span>
                    <div className="project-submission-time-stamp">
                        <p>{date.toUTCString()}</p>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
