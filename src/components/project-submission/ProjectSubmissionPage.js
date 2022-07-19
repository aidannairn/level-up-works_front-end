import React from "react";
import ProjectSubmissionBox from "./projectSubmissionBox";
import "../../styles/project-submission/projectSubmissionPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectSubmissionPage() {
    const [complete, setComplete] = useState([]);
    const [student, setStudent] = useState([]);
    const [updatedStudent, setUpdatedStudent] = useState(false);
    const [submissionImages, setSubmissionImages] = useState([]);
    const [triggerUse, setTriggerUse] = useState(true);
    const [studentID, setStudentID] = useState([]);
    const [download, setDownload] = useState([]);

    useEffect(
        () => {
            axios
                .get(`http://localhost:4000/project-submission/`)
                .then((res) => {
                    setStudent(res.data);
                    setSubmissionImages(res.data.submission);
                    setStudentID(res.data.studentID);
                    console.log(`res data`, res.data);
                });
        },
        [updatedStudent],
        [triggerUse]
    );

    const markedAsComplete = () => {
        setUpdatedStudent(!updatedStudent);
        axios.put(`http://localhost:4000/project-submission/${complete}`);
    };

    const tick = (e) => {
        setComplete([...complete, e.target.id]);
        setDownload(e.target.id);
        setDownloadReady(true);
    };

    const [downloadReady, setDownloadReady] = useState(false);

    const downloadFunction = () => {
        let downloadImage = student[download - 1].studentID; // Selects student based on e.target caught in download
        setDownload([]); // Empties download array after download btn is clicked
        setTriggerUse(!triggerUse);
        setDownloadReady(false);
        if (downloadImage === parseInt(complete)) {
            return console.log(`${student[download - 1].projectid}`);
        }
    };

    useEffect(() => {
        console.log(`use effect triggered`);
        setComplete([]);
    }, [triggerUse]);
    console.log(`complete`, complete);

    return (
        <>
            <div className="project-submission-content-parent">
                <div className="project-submission-content-container">
                    <div className="project-submission-content-titles">
                        <div className="project-submission-header">
                            PROJECT SUBMISSIONS
                        </div>
                        <span className="project-submission-white-space"></span>
                        <div
                            className="project-download-btn"
                            onClick={downloadReady ? downloadFunction : null} // onClick was logging errors so used ternary expression to disable it until conditions were met.
                        >
                            <img
                                src="images/projectSubmission/download-icon.svg"
                                alt="download icon"
                                width={15}
                            />{" "}
                            &nbsp; DOWNLOAD FILES
                        </div>
                        <div
                            className="project-complete-btn"
                            onClick={markedAsComplete}
                        >
                            <img
                                src="images/projectSubmission/tick-icon.svg"
                                alt="tick icon"
                                width={25}
                            />{" "}
                            &nbsp; MARK AS COMPLETE
                        </div>
                    </div>
                    <div className="project-submission-content-display">
                        {student.map((item, index) => (
                            <ProjectSubmissionBox
                                key={index}
                                item={item}
                                tick={tick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
