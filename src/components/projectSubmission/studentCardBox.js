import React from "react";
import './studentCardBox.css'

export default function StudentCardBox(props) {
    return (
        <>
            <div className="studentCardInfoBox">
                <div className="tickConfirmation">
                    <img src="images/projectSubmission/check-box-icon.svg" />
                </div>
                <div className="studentCardWhiteBox">
                    <div className="studentBox">
                        <div className="userProfilePic">
                            <img src='images/projectSubmission/aiden-pic.png' width={100} />
                        </div>
                        <div className="studentCardMiddle">
                            <div className="userNameAndText">
                                {`${props.user} submitted his project`}
                            </div>
                            <div className="submittedProject">
                                <img src="images/projectSubmission/aidens-screen-shot.png" width={200} />
                            </div>
                            <div className="zoomSection">
                                <img src="images/projectSubmission/zoom-icon.svg" />ENLARGE PHOTO
                            </div>
                        </div>
                        <div className="timeStampsForProjects">
                            <p>TUE 28 April 2020</p>
                            <p>10:43 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}