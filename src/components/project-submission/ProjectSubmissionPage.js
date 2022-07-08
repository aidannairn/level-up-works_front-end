import ProjectSubmissionBox from "./projectSubmissionBox";
import "../../styles/project-submission/projectSubmissionPage.css";
import { data } from "../../data/data";
import { useState } from "react";

export default function ProjectSubmissionPage() {
    const [allData, setAllData] = useState(data);
    const [complete, setComplete] = useState([]);
    const [tickBox, setTickBox] = useState("");

    const tick = (e) => {
        setComplete((oldComplete) => [...oldComplete, e.target.id]);
        setTickBox(e.target.value);
        console.log(`catching multiple ids`, complete);
    };

    const completed = () => {
        console.log(`complete data after parseInt`, parseInt(...complete));
        if (tickBox === "ticked")
            return setAllData(
                allData.filter((item) => item.id !== parseInt(complete))
            );
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
                        {allData.map((item, index) => (
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
