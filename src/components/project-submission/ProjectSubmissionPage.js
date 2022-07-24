import React from "react";
import ProjectSubmissionBox from "./projectSubmissionBox";
import "../../styles/project-submission/projectSubmissionPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectSubmissionPage() {
    const [complete, setComplete] = useState([]);
    const [student, setStudent] = useState([]);
    const [updatedStudent, setUpdatedStudent] = useState(false);
    const [downloadSubmission, setDownloadSubmission] = useState([]);
    const [triggerUse, setTriggerUse] = useState(false)

    useEffect(
        () => {
            axios
                .get(`http://localhost:4000/project-submission/`)
                .then((res) => {
                    setStudent(res.data);
                });
        },
        [updatedStudent],[triggerUse]
    );

    const markedAsComplete = () => {
        setUpdatedStudent(!updatedStudent);
        setComplete([])
        setDownloadSubmission([]); // Empties download array after download btn is clicked
        axios.put(`http://localhost:4000/project-submission/${complete}`);
    };

    const tick = (e) => {
        setComplete([...complete, e.target.id]);
        setDownloadSubmission([...downloadSubmission, e.target.value]);
        setDownloadReady(true);
    };


    // DL fn 
    // One at a time

    const [downloadReady, setDownloadReady] = useState(false);

    const downloadFunction = () => {
        setDownloadReady(false);
        setTriggerUse(!triggerUse)
        axios({
            url: `${downloadSubmission}`, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.png'); //or any other extension
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url)
        });
    };
    



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
