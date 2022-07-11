import { useState } from "react";
import "../../styles/project-submission/projectSubmissionBox.css";
import Modal from "../project-submission/Modal";

export default function ProjectSubmissionBox({
    tick,
    untick,
    item: { studentid, datesubmitted, name, profilepic, submitted, time },
}) {
    const [checkbox, setCheckbox] = useState(false);
    const tickCheckbox = () => {
        setCheckbox(!checkbox);
        untick();
    };

    const [clicked, setClicked] = useState(true);
    const handleClick = () => {
        setClicked(!clicked);
    };

    const [showModal, setShowModal] = useState(false);
    const triggerModal = () => {
        setShowModal(true);
    };

    let date = new Date(datesubmitted);

    return (
        <>
            <div className="white-box-container">
                <label className="tick-box-container">
                    <input
                        className="ticky"
                        onClick={tickCheckbox}
                        type="checkbox"
                        id={studentid}
                        value={checkbox ? "not ticked" : "ticked"}
                        checked={checkbox ? true : false}
                        onChange={tick}
                    ></input>
                    <span className="checkmark"></span>
                </label>
                <div className="white-box-inner-container">
                    <div
                        className="project-submission-profile-pic"
                        onClick={handleClick}
                    >
                        <img src={profilepic} alt=" " width={50} />
                    </div>

                    {clicked ? (
                        <div className="project-submitted-text">
                            {name.toUpperCase()} wants to show their project
                        </div>
                    ) : (
                        <>
                            <div className="project-submission-submit-details">
                                <div className="project-submitted-text">
                                    {name.toUpperCase()} submitted thier project
                                </div>
                                <div className="project-submitted-screen-shot">
                                    <img
                                        onClick={triggerModal}
                                        src={`/images/projectSubmission/${submitted}`}
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
                                        name={name.toUpperCase()}
                                        submitted={submitted}
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
