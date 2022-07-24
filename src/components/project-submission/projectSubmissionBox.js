import { useState, useEffect } from "react";
import "../../styles/project-submission/projectSubmissionBox.css";
import Modal from "../project-submission/Modal";

const ProjectSubmissionBox = ({ tick, item, uniqueID }) => {
    // const { tick, item } = props;
    const {
        studentID,
        dateSubmitted,
        firstname,
        projectid,
        profilePic,
        submission,
        time,
    } = item;

    const [checkbox, setCheckbox] = useState(false);
    const tickCheckbox = () => {
        setCheckbox(!checkbox);
    };

    const [clicked, setClicked] = useState(true);
    const handleClick = () => setClicked(!clicked);

    const [showModal, setShowModal] = useState(false);
    const triggerModal = () => setShowModal(true);

    let date = new Date(dateSubmitted);

    useEffect(() => {
        console.log(`unique`, uniqueID);
        setCheckbox(false);
        setClicked(true);
    }, [uniqueID]);

    return (
        <>
            <div className="white-box-container">
                <label className="tick-box-container">
                    <input
                        className="ticky"
                        onClick={tickCheckbox}
                        type="checkbox"
                        id={projectid}
                        value={studentID}
                        checked={checkbox}
                        onChange={tick}
                    ></input>
                    <span className="checkmark"></span>
                </label>
                {/* Double click fixed issue of single & modal not working */}
                <div
                    className="white-box-inner-container"
                    onDoubleClick={handleClick}
                >
                    <div className="project-submission-profile-pic">
                        <img
                            src={`https://cdn.filestackcontent.com/${profilePic}`}
                            alt="Student Pic"
                            width={50}
                            height={50}
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
                                        alt="Submitted Project"
                                        width={150}
                                        height={150}
                                    />{" "}
                                    <br></br>
                                    <div className="ps-zoom-div">
                                        <img
                                            onClick={triggerModal}
                                            className="ps-zoom-icon"
                                            src="images/projectSubmission/zoom-icon.svg"
                                            alt="zoom icon"
                                        />
                                        ENLARGE PHOTO
                                    </div>
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
};

export default ProjectSubmissionBox;
