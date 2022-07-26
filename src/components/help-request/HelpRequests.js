import HelpRequestBox from "./helpRequestBox";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/help-requests/helpRequests.css";

export default function HelpRequests() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/project-submission/`).then((res) => {
            setStudent(res.data);
        });
    }, []);

    return (
        <>
            <div className="hr-container">
                <div className="hr-main">
                    <div className="hr-content-container">
                        <div className="hr-header"> HELP REQUESTS</div>
                        <span className="hr-white-space"></span>
                        <div className="hr-reply-btn">
                            <img
                                className="ps-img-btn"
                                src="images/projectSubmission/reply-icon.svg"
                                alt="download icon"
                                width={15}
                                height={15}
                            />{" "}
                            &nbsp; REPLY &nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="hr-mark-done">
                            <img
                                className="ps-img-btn"
                                src="images/projectSubmission/tick-icon.svg"
                                alt="tick icon"
                                width={15}
                                height={15}
                            />{" "}
                            &nbsp; MARK AS DONE
                        </div>
                    </div>
                    <div className="hr-display-content">
                        {student.map((item, index) => (
                            <HelpRequestBox key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
