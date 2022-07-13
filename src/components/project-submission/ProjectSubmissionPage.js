import React from "react";
import ProjectSubmissionBox from "./projectSubmissionBox";
import "../../styles/project-submission/projectSubmissionPage.css";
import { data } from "../../data/data";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function ProjectSubmissionPage() {
    const [allData, setAllData] = useState(data);
    const [complete, setComplete] = useState([]);
    const [tickBox, setTickBox] = useState("");
    const [student, setStudent] = useState([]);
    const [updatedStudent, setUpdatedStudent] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:4000/project-submission/`).then((res) => {
            setStudent(res.data);
        });
    }, [updatedStudent]);

    const markedComplete = () => {
        setUpdatedStudent(!updatedStudent);
        axios.put(`http://localhost:4000/project-submission/${complete}`);
    };

    const tick = (e) => {
        setComplete([...complete, e.target.id]);
        setTickBox(e.target.value);
        console.log(`tick feature id is ${e.target.id}`);
    };

    const completed = () => {
        console.log(`complete data after parseInt`, parseInt(complete));
        if (tickBox === "ticked") return console.log("hello from completed");
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
                                src="images/projectSubmission/download-icon.svg"
                                alt="download"
                                width={15}
                            />{" "}
                            &nbsp; DOWNLOAD FILES
                        </div>
                        <div
                            className="project-complete-btn"
                            onClick={markedComplete}
                        >
                            <img
                                src="images/projectSubmission/tick-icon.svg"
                                alt="download"
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
