import ProjectSubmissionBox from "./projectSubmissionBox";
import "../../styles/project-submission/projectSubmissionPage.css";
import { data } from "../../data/data";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectSubmissionPage() {
    const [allData, setAllData] = useState(data);
    const [complete, setComplete] = useState([]);
    const [tickBox, setTickBox] = useState("");
    const [student, setStudent] = useState([]);
    const [forData, setForData] = useState([]);

    useEffect(() => {
        setStudent([]);
        axios.get(`http://localhost:4000/project-submission`).then((res) => {
            setStudent(res.data);
        });
    }, []);

    const tick = (e) => {
        setComplete([...complete, e.target.id]);
        setTickBox(e.target.value);
        console.log(e.target.id, e.target.value);
        console.log(`complete`, complete);
    };

    const completed = () => {
        console.log(`catching multiple ids`, tickBox);
        console.log(`complete data after parseInt`, parseInt(complete));
        if (tickBox === "ticked")
            return setAllData(
                allData.filter((item) => item.id !== parseInt([complete]))
            );
    };

    const untick = () => {
        console.log(`unticked checkbox`);
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
                            onClick={completed}
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
                                untick={untick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
