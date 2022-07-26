import { useState } from "react";

const HelpRequestBox = ({
    tick,
    item: { studentID, dateSubmitted, firstname, profilePic, submission, time },
}) => {
    const [checkbox, setCheckbox] = useState(false);
    const tickCheckbox = () => setCheckbox(!checkbox);

    const [clicked, setClicked] = useState(true);
    const handleClick = () => setClicked(!clicked);

    let date = new Date(dateSubmitted);

    return (
        <>
            <div className="white-box-container">
                <label className="tick-box-container">
                    <input
                        className="ticky"
                        onClick={tickCheckbox}
                        type="checkbox"
                        onChange={tick}
                    ></input>
                    <span className="checkmark"></span>
                </label>
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
                    <div className="project-submitted-text">
                        {firstname.toUpperCase()} needs help with their project.
                    </div>
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

export default HelpRequestBox;
