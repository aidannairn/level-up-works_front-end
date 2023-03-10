import ProjectSubmissionBox from "./projectSubmissionBox";
import "../../styles/project-submission/projectSubmissionPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectSubmissionPage() {
    const [projectKey, setProjectKey] = useState([]);
    const [student, setStudent] = useState([]);
    const [updatedStudent, setUpdatedStudent] = useState(false);
    const [studentKey, setStudentKey] = useState([]);

    // Grab all data from students who have submitted a project through back-end query
    // When updatedStudent changes state it should run useEffect again to renew data which was originally pulled

    useEffect(() => {
        axios.get(`http://localhost:4000/project-submission/`).then((res) => {
            setStudent(res.data);
        });
    }, [updatedStudent]);

    // Update submission as completed matching both StudentID & ProjectID

    const markedAsComplete = () => {
        setUpdatedStudent(!updatedStudent);
        setProjectKey([]);
        setStudentKey([]);
        axios.put(`http://localhost:4000/project-submission/complete`, {
            projectKey,
            studentKey,
        });
    };

    const tick = (e) => {
        setProjectKey([...projectKey, e.target.id]);
        setStudentKey([...studentKey, e.target.value]);
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
                        <div className="project-download-btn">
                            <img
                                className="ps-img-btn"
                                src="images/projectSubmission/download-icon.svg"
                                alt="download icon"
                                width={15}
                                height={15}
                            />{" "}
                            &nbsp; DOWNLOAD FILES &nbsp; &nbsp; &nbsp;
                        </div>
                        <div
                            className="project-complete-btn"
                            onClick={markedAsComplete}
                        >
                            <img
                                className="ps-img-btn"
                                src="images/projectSubmission/tick-icon.svg"
                                alt="tick icon"
                                width={15}
                                height={15}
                            />{" "}
                            &nbsp; MARK AS COMPLETE
                        </div>
                    </div>
                    <div className="project-submission-content-display">
                        {student.map((item, index) => {
                            return (
                                <ProjectSubmissionBox
                                    key={index}
                                    item={item}
                                    tick={tick}
                                    uniqueID={`studentID ${item.studentID} / projectID ${item.projectid}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
