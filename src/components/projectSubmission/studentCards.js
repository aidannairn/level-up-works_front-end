import React from "react";
import './studentCards.css'
import StudentCardBox from "./studentCardBox";

export default function StudentCards() {
    return (
        <>
            <div className="studentCardSection">
                <div className="studentCardTopSectionLeft">
                    <h2>PROJECT SUBMISSIONS </h2>
                </div>
                <div className="studentCardTopSectionRight">
                    <span className="downloadFilesBtn">
                        <img className="downloadIcon" src="images/projectSubmission/download-icon.svg" />
                        <h3 className="topRightText">DOWNLOAD FILES</h3>
                    </span>
                    <span className="markAsCompleteBtn">
                        <img className="tickIcon" src="images/projectSubmission/tick-icon.svg" />
                        <h3 className="topRightText">MARK AS COMPLETE PROJECT</h3>
                    </span>
                </div>
                <div className="studentCardContainer">
                </div>
            </div>
            <StudentCardBox user='AIDEN' />
        </>
    )
}

