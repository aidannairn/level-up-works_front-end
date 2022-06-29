import React from 'react'
import ProjectSubmissionWhiteBox from './projectSubmissionWhiteBox'
import './projectSubmission2.css'

export default function ProjectSubmission2() {
    return (
        <>
            <div className='project-submission-content-parent'>
            <div className='project-submission-content-container'>
                <div className='project-submission-content-titles'>
                        <div className='project-submission-header'>PROJECT SUBMISSIONS</div>
                        <span className='project-submission-white-space'></span>
                        <div className='project-download-btn'><img src='images/projectSubmission/download-icon.svg' alt='download' width={15} />DOWNLOAD FILES</div>
                        <span className='test-space'></span>
                        <div className='project-complete-btn'><img src='images/projectSubmission/tick-icon.svg' alt='download' width={25} />MARK AS COMPLETE</div>
                </div>
                    <div className='project-submission-content-display'>
                        <ProjectSubmissionWhiteBox picture='images/projectSubmission/aiden-pic.png' user='Aiden' work="images/projectSubmission/aidens-screen-shot.png" date='TUE 28 April 2020' time='10:43 AM'/>
                        <ProjectSubmissionWhiteBox />
                        <ProjectSubmissionWhiteBox />
                        <ProjectSubmissionWhiteBox />
                </div>
            </div>
            </div>
        </>
    )
}

