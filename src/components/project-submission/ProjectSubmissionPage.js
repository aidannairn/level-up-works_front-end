import ProjectSubmissionBox from "./projectSubmissionBox";
import "../../styles/project-submission/projectSubmissionPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectSubmissionPage() {
    const [projectKey, setProjectKey] = useState([]);
    const [student, setStudent] = useState([]);
    const [updatedStudent, setUpdatedStudent] = useState(false);
    const [studentKey, setStudentKey] = useState([]);

    useEffect(() => {
        console.log(`first time`);
        axios.get(`http://localhost:4000/project-submission/`).then((res) => {
            setStudent(res.data);
        });
    }, [updatedStudent]);

    const markedAsComplete = () => {
        setUpdatedStudent(!updatedStudent);
        setProjectKey([]);
        setStudentKey([]);
        axios
            .put(`http://localhost:4000/project-submission/complete`, {
                projectKey,
                studentKey,
            })
            .then((res) => {});
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
                        <div
                            className="project-download-btn"
                            // onClick={downloadReady ? downloadFunction : null} // onClick was logging errors so used ternary expression to disable it until conditions were met.
                        >
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
                            console.log(`item1`, item);
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
